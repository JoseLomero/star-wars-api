import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  filmList: any[];
  filmDetails: any;

  constructor(
    private filmsService: FilmsService,
  ) { }

  ngOnInit() {
    this.filmsService.getFilms()
      .subscribe(results => {
        this.filmList = results;
      });
  }

}
