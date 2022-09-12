import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-view-all-animal',
  templateUrl: './view-all-animal.component.html',
  styleUrls: ['./view-all-animal.component.css']
})
export class ViewAllAnimalComponent implements OnInit {

  animalList : Animal[] | undefined;

  constructor(private animalService:AnimalService) { }

  ngOnInit(): void {
    this.allAnimals();
  }

  allAnimals(){
    this.animalService.viewAnimals().subscribe((data)=>{
      this.animalList = data;
    })
  }

}
