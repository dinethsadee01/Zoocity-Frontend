import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    animal_id: new FormControl(null,[Validators.required]),
    animal_name: new FormControl(null,[Validators.required]),
    animal_age: new FormControl(null,[Validators.required]),
    animal_gender: new FormControl(null,[Validators.required])
  })
  constructor(private router:Router) { }
  add(){
    
  }

  ngOnInit(): void {
  }

}