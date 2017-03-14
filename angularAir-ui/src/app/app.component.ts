import { Component, OnInit } from '@angular/core';
import { ShowsService } from './shared/shows.service';
import { Show } from './shared/classes/show';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  shows: Show[] = [];
  errorMessage: any;

  constructor(private showsService: ShowsService) { }

  ngOnInit(): void {
    this.getShows();
  }

  getShows() {
    this.showsService.getShows()
      .subscribe(
      shows => this.shows = shows,
      error => this.errorMessage = <any>error);
  }

  addShow() {
    let newShow = new Show("Added Show", 1000);
    this.showsService.addShow(newShow)
      .subscribe(
      show => this.shows.push(show),
      error => this.errorMessage = <any>error);
  }
}
