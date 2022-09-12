import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User();
  currentUser: boolean = false;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null,[Validators.required]),
    password: new FormControl(null,[Validators.required])
  })
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService
      .login(
        this.loginForm.get('username')?.value,
        this.loginForm.get('password')?.value
      )
      .subscribe(
        (resp) => {
          if (resp) {
            sessionStorage.setItem(
              'username',
              this.loginForm.get('username')?.value
            );
            this.currentUser = false;
            this.router.navigate(["animal-operation"]);
            
          } else {
            this.currentUser = true;
          }
        },
        (error) => {
          this.currentUser = true;
          alert("Please check the username and password");
        }
      );
      
    }

}
