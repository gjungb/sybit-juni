import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Book } from '../model/book';
import { BookApiService } from '../shared/book-api.service';

@Component({
  selector: 'sb-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
// stateful component
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[] = [];

  private sub!: Subscription;

  constructor(private readonly api: BookApiService) {}

  ngOnInit(): void {
    const ticker$ = interval(1000).pipe(tap((res) => console.log(res)));

    this.sub = ticker$.subscribe();

    this.api.getAll().subscribe((res) => {
      this.books = res;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
