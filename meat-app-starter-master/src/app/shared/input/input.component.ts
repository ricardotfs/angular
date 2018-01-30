import { Component, OnInit, Input,ContentChild,AfterContentInit } from '@angular/core';
import { NgModel,FormControlName } from '@angular/forms';
import { FormControl } from '@angular/forms/src/model';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'  
})
export class InputComponent implements OnInit,AfterContentInit {

  ngAfterContentInit(): void {
    this.input = this.model || this.control
    if(this.input == undefined){
      throw new Error('Esse componente presica ser usado com uma diretiva ngModel ou formControlName')
    }
  }

  @Input() label:string
  @Input() erroMessage:string
  @Input() showTip:boolean = true
  input:any
  
  @ContentChild(NgModel) model:NgModel
  @ContentChild(FormControlName) control:FormControlName
  
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
