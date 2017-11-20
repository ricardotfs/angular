import{Response} from "@angular/http"
//import { Observable } from "rxjs/Observable";
import {Observable} from 'rxjs/Rx';
export class ErroHandler{
    static handlerErro(erro:Response | any){
        let errorMessage:string
        if(erro instanceof  Response){
            errorMessage = `Erro ${erro.status} ao obter a URL ${erro.url} - ${erro.statusText}`
        }else{
            errorMessage = erro.toString()
        }
        console.log(errorMessage)
        
        return Observable.throw(errorMessage)
    }
}