import{HttpErrorResponse} from "@angular/common/http"
import { Observable } from "rxjs/Observable";

export class ErroHandler{
    static handlerErro(erro:HttpErrorResponse | any){
        let errorMessage:string
        if(erro instanceof  HttpErrorResponse){
            const body = erro.error;
            errorMessage = `${erro.url}: ${erro.status} - ${erro.statusText || ''} ${body}`
        }else{
            errorMessage = erro.errorMessage ? erro.errorMessage : '123';
        }
        console.log(errorMessage)
        
        return Observable.throw(errorMessage)
    }
}