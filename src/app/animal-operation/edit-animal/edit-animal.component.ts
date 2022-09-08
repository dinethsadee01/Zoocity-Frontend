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

aId = "";
aName = "";
aAge = "";
aGender = "";
aCategory="";
aSubspecie = "";

viewForm2: FormGroup = new FormGroup({
  search: new FormControl(null)
})

addForm2: FormGroup = new FormGroup({
  animal_name: new FormControl(this.aName),
  animal_age: new FormControl(this.aAge),
  animal_subspecie: new FormControl(this.aSubspecie),
  animal_gender: new FormControl(this.aGender),
  animal_category: new FormControl(this.aCategory)
})

findE(){
  this.animalService.searchAnimal(this.viewForm2.get('search')?.value).subscribe(res=>{
    this.aId = res.aid;
    this.aName = res.aname;
    this.aAge = res.age;
    this.aGender = res.gender;
    this.aCategory = res.category;
    this.aSubspecie = res.subspecie;
    this.addForm2 = new FormGroup({
      animal_name: new FormControl(this.aName),
      animal_age: new FormControl(this.aAge),
      animal_subspecie: new FormControl(this.aSubspecie),
      animal_gender: new FormControl(this.aGender),
      animal_category: new FormControl(this.aCategory)
    })
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
  ).subscribe(res=>{alert(res.data)},err=>{console.log(err)});
  alert('Deleted Successfully')
}

ngOnInit(): void {
  /*let bookid = parseInt(this.router.snapshot.paramMap.get('id')!);
    
    //set initial form values
    this.bookService.getBook(bookid).subscribe(res=>{
      this.book=res.data;
        this.updateForm= new FormGroup({
        name: new FormControl(this.book.name),
        description: new FormControl(this.book.description),
        author: new FormControl(this.book.author),
        price: new FormControl(this.book.price),
        imageUrl: new FormControl(this.book.imageUrl),
      });
    },err=>{
      console.log(err);
    });*/
}

}