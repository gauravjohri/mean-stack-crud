import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public http: HttpClient, private router: Router, private route: ActivatedRoute) { }
  submitted: boolean = false;
  fetchedData: any = {};
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('_id');
    if (id) {
      this.http.get("http://localhost:3000/blogs/" + id).subscribe(data2 => {
        this.fetchedData = data2;
      });

    }
  }


  public submit(formData: NgForm) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    let data = "";
    let id = this.route.snapshot.paramMap.get('_id') ? this.route.snapshot.paramMap.get('_id') : '';
    let formFinalData = formData.value;
    for (let key in formFinalData) {
      data += "&" + key + "=" + formFinalData[key];
    }
    if (formData.valid) {
      this.http.post("http://localhost:3000/add/blogs/" + id, data, httpOptions).subscribe(data => {
        this.router.navigateByUrl("home");
        this.submitted = true;
      })
    }
  }
}
