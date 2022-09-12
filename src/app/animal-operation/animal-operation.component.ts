import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-operation',
  templateUrl: './animal-operation.component.html',
  styleUrls: ['./animal-operation.component.css']
})
export class AnimalOperationComponent implements OnInit {

  uName = sessionStorage.getItem('username')
  
  constructor() { }

  ngOnInit(): void {
    
  }

  logout(){
    sessionStorage.clear();
  }

}
