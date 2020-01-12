import { Component, OnInit, Input } from '@angular/core';
import { FilmsService } from '../films.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() filmDetails: any;

  constructor(
    // private route: ActivatedRoute,
    // private filmsService: FilmsService,
  ) { }

  ngOnInit() {
    // this.route.params
    // .pipe(
    //   map(params => {
    //     return params.id;
    //   }),
    //   switchMap(id => this.filmsService.getFilmDetails(id)),
    // )
    // .subscribe(filmDetails => {
    //   this.filmDetails = filmDetails;
    // });
  }

}
