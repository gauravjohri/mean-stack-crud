import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"add/:_id?",component:AddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
