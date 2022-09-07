import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null,[Validators.required]),
    password: new FormControl(null,[Validators.required])
  })
  constructor(private router:Router) { }
  login(){
    var userName="zoocity";
    var pwd="zoocity";

    if(userName===this.loginForm.get("username")?.value && pwd===this.loginForm.get("password")?.value){
        this.router.navigate(["animal-operation"])
    }else{
      alert("Incorrect Credentials")
    }
  }

  ngOnInit(): void {
  }

}
