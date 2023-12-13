import { Controller, Get, Query } from '@nestjs/common';
import { OmdbService } from '../omdb/omdb.service';
import { Observable, map } from 'rxjs';
import { AxiosResponse } from 'axios';

@Controller('movie')
export class MovieController {
  constructor(private readonly omdbService: OmdbService) {}

  @Get('search')
  searchMovies(@Query('query') query: string): Observable<any> {
    return this.omdbService
      .searchMovies(query)
      .pipe(map((response: AxiosResponse) => response.data));
  }

  @Get('details')
  getMovieDetails(@Query('imdbID') imdbID: string): Observable<any> {
    return this.omdbService
      .getMovieDetails(imdbID)
      .pipe(map((response: AxiosResponse) => response.data));
  }
}
