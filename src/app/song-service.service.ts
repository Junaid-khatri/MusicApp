import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from './song';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class SongServiceService {
  url = 'assets/songs/songs.json';
  constructor(private http: HttpClient) {}

  getSongsOf(value: string): Observable<Song[]> {
    if (value == 'all') {
      return this.getAllSongs();
    } else if (value == 'happy' || value == 'sad' || value == 'party') {
      return this.http.get<Song[]>(this.url).pipe(
        map((songs) => {
          return songs.filter((song) => song.mood === value);
        })
      );
    }
    return this.http.get<Song[]>(this.url).pipe(
      map((songs) => {
        return songs.filter((song) => song.artistName === value);
      })
    );
  }

  getAllSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.url);
  }
  getSongsByYear(year: number): Observable<number> {
    return this.getAllSongs().pipe(
      map(
        (songs) =>
          songs.filter(
            (song) => {
              console.log(moment(song.dateOfRelease, 'DD/MM/YYYY').toDate().getFullYear()," ",year," ", moment(song.dateOfRelease, 'DD/MM/YYYY').toDate().getFullYear() === year);
              new Date(song.dateOfRelease).getFullYear() === year}
          ).length
      )
    );
  }
}
