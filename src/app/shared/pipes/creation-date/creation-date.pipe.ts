import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creationDate',
})
export class CreationDatePipe implements PipeTransform {
  transform(date: string): string {
    return date.split("/").join(".");
  }
}
