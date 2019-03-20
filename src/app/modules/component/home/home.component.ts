import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public http:HttpClient) { }
  displayedColumns: string[] = ['title', 'body'];
  dataSource:any = [];
  ngOnInit() {
    this.http.get("http://localhost:3000/blogs/").subscribe(data=>{
      this.dataSource = data;
    });
  }

}
