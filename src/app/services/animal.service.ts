import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  
  constructor(private http:HttpClient) { }

  addAnimal(){}
}
