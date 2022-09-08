import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-view-animal',
  templateUrl: './view-animal.component.html',
  styleUrls: ['./view-animal.component.css']
})
export class ViewAnimalComponent implements OnInit {

  constructor(private animalService:AnimalService) { }

  aId = "";
  aName = "";
  aAge = "";
  aGender = "";
  aCategory = "";
  aSubspecie = "";

  viewForm: FormGroup = new FormGroup({
    search: new FormControl(null)
  })

  find(){
    this.animalService.searchAnimal(this.viewForm.get('search')?.value).subscribe(res=>{
      this.aId = res.aid;
      this.aName = res.aname;
      this.aAge = res.age;
      this.aGender = res.gender;
      this.aCategory = res.category;
      this.aSubspecie = res.subspecie;
    },err=>{
      alert(" Animal not found");
    });
  }

  ngOnInit(): void {
  }

}
