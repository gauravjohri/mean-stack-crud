import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../component/main/main.component';
const routes: Routes = [
  {path:"",component:MainComponent,
children:[
  {path:"home",loadChildren: 'src/app/modules/component/home/home.module#HomeModule'}
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
