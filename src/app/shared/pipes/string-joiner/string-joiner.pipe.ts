import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringJoiner',
})
export class StringJoinerPipe implements PipeTransform {
  transform(
    value: Array<unknown>,
    separator: string,
    ...args: unknown[]
  ): unknown {
    return value.join(separator);
  }
}
