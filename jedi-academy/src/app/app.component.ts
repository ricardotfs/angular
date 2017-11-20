import { Component } from '@angular/core';
import { Student } from './student/student.model';

@Component({
  selector: 'jedi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  students:Student[] =
  [
     {name:'Luke',isJedi:true, templa:'He is Jedi'},
     {name:'Leia',isJedi:false },
     {name:'Han Solo',isJedi:false}
  ] 

  
}
