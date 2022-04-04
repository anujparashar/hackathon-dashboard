import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'readMore'
})
export class ReadMorePipe implements PipeTransform {

    transform(value: string, arg: number): string {
        return value.length < arg ? value : value.substring(0, arg + 1)
    }

}
