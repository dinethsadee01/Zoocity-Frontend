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
  addAnimal(aId:string, aName:string, age:number, subspecie:string ,gender:string, category:string ):Observable<any>{
    return this.http.post(this.baseUrl+'/add',{
      id:aId,
      aname:aName,
      age:age,
      subspecie:subspecie,
      gender:gender,
      category:category
    })
  }

  searchAnimal(id:number):Observable<any>{
    return this.http.get(this.baseUrl+"/view_animal?id="+id);
  }

  editAnimal(aName:string, age:number, subspecie:string ,gender:string, category:string):Observable<any>{
    return this.http.put(this.baseUrl+'/update',{
      aname:aName,
      age:age,
      subspecie:subspecie,
      gender:gender,
      category:category
    })
  }
}
