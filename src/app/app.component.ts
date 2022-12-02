import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task1';
  reactiveForm:FormGroup
  user:User
  constructor(){
    this.reactiveForm= new FormGroup({
      uname:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      gender:new FormControl(null,Validators.required),
      country:new FormControl(null,Validators.required),
      phone:new FormControl(null,Validators.required),
      education:new FormControl(null,Validators.required)
    });

  }


  onButtonClick(){
    console.log(this.reactiveForm);

  }
}
