import { EventEmitter } from "@angular/core";

export class NotificationServices{

    notifier = new EventEmitter<string>();

    notify(message:string){
        this.notifier.emit(message);
    }
}