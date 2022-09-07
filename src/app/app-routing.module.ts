import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AnimalOperationComponent } from './animal-operation/animal-operation.component';
import { AddAnimalComponent } from './animal-operation/add-animal/add-animal.component';
import { ViewAnimalComponent } from './animal-operation/view-animal/view-animal.component';
import { ViewAllAnimalComponent } from './animal-operation/view-all-animal/view-all-animal.component';
import { EditAnimalComponent } from './animal-operation/edit-animal/edit-animal.component';


const routes: Routes = [
  {'path': 'home', component: HomeComponent},
  {'path':'dashboard', component: DashboardComponent},
  {'path':'about-us',component: AboutUsComponent},
  {'path': 'login', component: LoginComponent},
  {'path': 'animal-operation', component: AnimalOperationComponent,
    children: [
      {'path': 'add-animal', component: AddAnimalComponent},
      {'path': 'view-animal', component: ViewAnimalComponent},
      {'path': 'edit-animal', component: EditAnimalComponent},
      {'path': 'view-all-animal', component: ViewAllAnimalComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
