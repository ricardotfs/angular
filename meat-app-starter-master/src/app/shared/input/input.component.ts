import { Component, OnInit, Input,ContentChild,AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'  
})
export class InputComponent implements OnInit,AfterContentInit {

  ngAfterContentInit(): void {
    this.input = this.model
    if(this.input == undefined){
      throw new Error('Esse componente presica ser usado com uma diretiva ngModel')
    }
  }

  @Input() label:string
  @Input() erroMessage:string
  input:any
  
  @ContentChild(NgModel) model:NgModel

  constructor() { }

  ngOnInit() {
  }

  hasSucess(){
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(){
    return this.input.invalid && (this.input.dirty || this.input.touched)    
  }
}
