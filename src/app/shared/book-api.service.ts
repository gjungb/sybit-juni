import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  constructor(private readonly client: HttpClient) {}

  getAll(): Observable<Book[]> {
    const books$ = this.client.get<Book[]>('http://localhost:4730/books').pipe(
      delay(3000),
      tap(res => console.log(res))
    );


    return books$;
  }
}

