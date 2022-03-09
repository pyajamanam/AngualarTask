import {Pipe, PipeTransform} from '@angular/core';
 
@Pipe({
    name: 'dateConvert'
})
export class DateConverter implements PipeTransform {
    transform(date: string): string {
        return date.split("/").join(".");
      }
}