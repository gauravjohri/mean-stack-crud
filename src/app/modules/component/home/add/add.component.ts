import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public http: HttpClient, private router: Router) { }
  submitted: boolean = false;
  ngOnInit() {
  }
  public submit(formData: NgForm) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    let data = "";
    let formFinalData = formData.value;
    for (let key in formFinalData) {
      data += "&" + key + "=" + formFinalData[key];
    }
    if (formData.valid) {
      this.http.post("http://localhost:3000/add/blogs/", data, httpOptions).subscribe(data => {
        this.router.navigateByUrl("home");
        this.submitted=true;
      })
    }
  }
}
