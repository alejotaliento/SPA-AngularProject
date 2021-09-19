import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';


@Pipe({
    name: 'espar'
})
export class EsParPipe implements PipeTransform {

    transform(value: any) {
        let result = "";

        if (value % 2 == 0) {
            result = "Year is pair " + value;
        } else {
            result = "Year is odd " + value;
        }
        return result;
    }
}