/**
 * CompletedShowController
 *
 * @description :: A completed version of the show controller for demo purposes 
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    // OVERRIDES
    find: function find(req, res) {
        return Show.find()
            .then(result => res.json(200, result))
            .catch(error => {
                sails.log.error('completedShow.find error', error);
                return res.json(500, error);
            });
    },
    findOne: function findOne(req, res) {
        var id = req.params.id;

        return Show.find({ id: id })
            .then(result => res.json(200, result))
            .catch(error => {
                sails.log.error('completedShow.findOne error', error);
                return res.json(500, error);
            });
    },
    create: function create(req, res) {
        var show = req.body;

        if (show.episodeNum === undefined || show.episodeNum === "") {
            return res.json(400, "episodeNum is required");
        }

        if (show.title === undefined || show.title === "") {
            return res.json(400, "title is required");
        }

        return Show.create(show)
            .then(result => res.json(200, result))
            .catch(error => {
                sails.log.error('completedShow.findOne error', error);
                return res.json(500, error);
            });
    },
    update: function update(req, res) {
        var show = req.body;
        var id = req.params.id;

        if (show.episodeNum === undefined || show.episodeNum === "") {
            return res.json(400, "episodeNum is required");
        }

        if (show.title === undefined || show.title === "") {
            return res.json(400, "title is required");
        }

        return Show.update(id, show)
            .then(result => res.json(200, result))
            .catch(error => {
                sails.log.error('completedShow.update error', error);
                return res.json(500, error);
            });
    },
    destroy: function destroy(req, res) {
        var id = req.params.id;
        sails.log.debug(id, id);
        return Show.destroy({id: id})
            .then(result => res.json(200, result))
            .catch(error => {
                sails.log.error('completedShow.delete error', error);
                return res.json(500, error);
            });
    },

    // CUSTOM METHODS
    getShowsSortedByTitle: function getShowsSortedByTitle(req, res) {
        return Show.find()
            .sort({ 'title': 1 })
            .then(result => res.json(200, result))
            .catch(error => {
                sails.log.error('completedShow.getShowsSortedByTitle error', error);
                res.json(500, error);
            });
    },
};

