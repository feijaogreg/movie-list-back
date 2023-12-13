import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';

@Injectable()
export class OmdbService {
  constructor(private readonly httpService: HttpService) {}

  searchMovies(query: string): Observable<AxiosResponse> {
    const apiKey = process.env.OMDB_API_KEY;
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;
    return this.httpService.get(url);
  }

  getMovieDetails(imdbID: string): Observable<AxiosResponse> {
    const apiKey = process.env.OMDB_API_KEY;
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&plot=full`;

    return this.httpService.get(url);
  }
}
