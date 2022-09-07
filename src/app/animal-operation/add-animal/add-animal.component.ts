import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {

  addForm: FormGroup = new FormGroup({
    animal_id: new FormControl(null,[Validators.required]),
    animal_name: new FormControl(null,[Validators.required]),
    animal_age: new FormControl(null,[Validators.required]),
    animal_subspecie: new FormControl(null,[Validators.required]),
    animal_gender: new FormControl(null,[Validators.required]),
    animal_category: new FormControl(null,[Validators.required])
  })
  constructor(private animalService:AnimalService) { }
  add(){
    this.animalService.addAnimal(
      this.addForm.get('animal_id')?.value,
      this.addForm.get('animal_name')?.value,
      this.addForm.get('animal_age')?.value,
      this.addForm.get('animal_subspecie')?.value,
      this.addForm.get('animal_gender')?.value,
      this.addForm.get('animal_category')?.value,
    )
    .subscribe(res=>{alert(res.data)},err=>{console.log(err)})
  }

  ngOnInit(): void {
  }

}