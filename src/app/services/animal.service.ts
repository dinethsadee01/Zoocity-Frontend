import { HttpClient } from '@angular/common/http';
import { ASTWithName } from '@angular/compiler';
import { APP_ID, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  
  constructor(private http:HttpClient) { }

  baseUrl = 'http://localhost:8081/animal';
  addAnimal(aId:string, aName:string, age:number, gender:string, category:string, subspecie:string):Observable<any>{
    return this.http.post(this.baseUrl+'/add',{
      id:aId,
      name:aName,
      age:age,
      subspecie:subspecie,
      gender:gender,
      category:category
    })
  }
}
