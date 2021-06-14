import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'sb-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
// stateless component / representational component / dumb component
export class BookCardComponent implements OnInit {

  custom = 'red';

  @Input('sbContent')
  content!: Book;

  @Output()
  selectBook = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

  handleDetailEvent(ev: MouseEvent): void {
    // do stuff => Seiteneffekt / Effekt
    this.selectBook.emit(this.content);
  }

}
