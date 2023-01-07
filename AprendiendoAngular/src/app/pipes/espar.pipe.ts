import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'espar'
})

export class EsParPipe implements PipeTransform{

    transform(value: any, ...args: any[]) {
        var Numero = "LA FECHA NO ES PAR"
        if(value % 2 == 0){
            Numero = "LA FECHA ES PAR"
        }
        return "El año es = " + value + " y " + Numero;
    }

}