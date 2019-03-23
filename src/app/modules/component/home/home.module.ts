import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule,MatMenuModule,MatIconModule,MatFormFieldModule,MatSelectModule,MatInputModule,MatButtonModule,MatSnackBarModule} from '@angular/material';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { MessagesComponent } from 'src/app/shared/component/messages/messages.component';
@NgModule({
  declarations: [HomeComponent,MessagesComponent, AddComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,MatInputModule,MatButtonModule,MatSnackBarModule,
    FormsModule
   
  ],
  entryComponents:[]
})
export class HomeModule { }
