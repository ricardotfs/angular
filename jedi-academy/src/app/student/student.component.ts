import { Component, OnInit, Input } from '@angular/core';
import{Student} from './student.model'

@Component({
  selector: 'jedi-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student:Student 

  
  constructor() { }

  clicked(){
    console.log(`Student: ${this.student.name}`)
  }
  
  ngOnInit() {
  }

}
