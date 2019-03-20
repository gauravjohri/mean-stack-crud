import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public http:HttpClient,private router:Router) { }
  displayedColumns: string[] = ['title', 'body','edit','delete'];
  dataSource:any = [];
  ngOnInit() {
    this.fetchData();
  }

  public fetchData(){
    this.http.get("http://localhost:3000/blogs/").subscribe(data=>{
      this.dataSource = data;
    });
  }

  public remove(id) {
    this.http.delete("http://localhost:3000/blogs/"+id).subscribe(d=>{
      this.fetchData();
    })
  }

}
