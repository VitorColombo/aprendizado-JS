
//no arquivo que vai exportar a funcao
export const cap = capitalizeString = str => str.toUpperCase()

//no arquivo que vai importar a funcao
import { capitalizeString } from "nome do arquivo"


//usando export para reutilizar a funcao
const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export{ capitalizeString }; //exportando a funcao

export const foo = "bar";
export const boo = "far";//exportando as 2 variaveis e a funcao

// Importando tudo de um arquivo

import * as NomequevaireceberData from "file-name";

//Export default (exportar uma coisa so)

export default function subtract(x,y) {return x - y}; //apenas vai exportar isso do arquivo

//Import default (importar uma coisa so)

import subtract from "file-name";

subtract(x,y);


