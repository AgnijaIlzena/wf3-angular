import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  

  movies: Movie[] = [];

  searchKey: string = '';
  

  onUpdateSearchKey(event: Event) {
    this.searchKey = (<HTMLInputElement>event.target).value;
  }

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.searchMovie(this.searchKey).subscribe(result => {
      this.movies = result.Search;
      console.log(this.movies);
    });
  }

}
