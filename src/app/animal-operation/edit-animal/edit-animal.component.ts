import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})
export class EditAnimalComponent implements OnInit {

  constructor(private animalService:AnimalService) { }

  aId = "---";
  aName = "---";
  aAge = "---";
  aGender = "---";
  aCategory="---";
  aSubspecie = "---";

  viewForm2: FormGroup = new FormGroup({
    search: new FormControl(null)
  })

  addForm2: FormGroup = new FormGroup({
    animal_name: new FormControl(null,[Validators.required]),
    animal_age: new FormControl(null,[Validators.required]),
    animal_subspecie: new FormControl(null,[Validators.required]),
    animal_gender: new FormControl(null,[Validators.required]),
    animal_category: new FormControl(null,[Validators.required])
  })

  findE(){
    this.animalService.searchAnimal(this.viewForm2.get('search')?.value).subscribe(res=>{
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

  addE(){
    this.animalService.editAnimal(
      this.viewForm2.get('search')?.value,
      this.addForm2.get('animal_name')?.value,
      this.addForm2.get('animal_age')?.value,
      this.addForm2.get('animal_subspecie')?.value,
      this.addForm2.get('animal_gender')?.value,
      this.addForm2.get('animal_category')?.value,
    )
    .subscribe(res=>{alert(res.data)},err=>{console.log(err)})
  }

  aDelete(){
    this.animalService.deleteAnimal(
      this.viewForm2.get('search')?.value
    ).subscribe(res=>{alert(res.data)},err=>{console.log(err)})
  }

  ngOnInit(): void {
  }

}