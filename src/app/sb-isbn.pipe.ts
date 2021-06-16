import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sbIsbn'
})
export class SbIsbnPipe implements PipeTransform {

  // TODO: implement according to _Fachabteilung_
  transform(value: unknown, ...args: unknown[]): unknown {
    return value;
  }

}
