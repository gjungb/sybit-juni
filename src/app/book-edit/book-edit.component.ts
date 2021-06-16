import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Book } from '../model/book';

@Component({
  selector: 'sb-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit {
  book: Book = {
    isbn: '123',
    title: 'Es',
    author: 'Stephen King',
  };

  form!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(this.book.title, [
        Validators.required,
        Validators.minLength(3),
      ]),
    });

    this.form.valueChanges
      .pipe(debounceTime(300))
      .subscribe((v) => console.log(v));
  }

  updateBook(book: Book): void {
    console.log(book);
  }
}
