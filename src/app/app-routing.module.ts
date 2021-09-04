import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddInsComponent } from './add-ins/add-ins.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-ins', component: AddInsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }