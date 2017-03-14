/**
 * sessionAdmin
 *
 * @module      :: Policy
 * @description :: Simple policy to hard code isAdmin for demo
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller
  if (!req.session.adminUser) {
    req.session.adminUser = {
        isAdmin: true
    };
  }

  return next();

 };
