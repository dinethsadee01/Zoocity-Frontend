import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { AnimalOperationComponent } from './animal-operation/animal-operation.component';
import { AddAnimalComponent } from './animal-operation/add-animal/add-animal.component';
import { ViewAnimalComponent } from './animal-operation/view-animal/view-animal.component';
import { EditAnimalComponent } from './animal-operation/edit-animal/edit-animal.component';
import { ViewAllAnimalComponent } from './animal-operation/view-all-animal/view-all-animal.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    AboutUsComponent,
    LoginComponent,
    AnimalOperationComponent,
    AddAnimalComponent,
    ViewAnimalComponent,
    EditAnimalComponent,
    ViewAllAnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
