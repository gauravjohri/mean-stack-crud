import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public http: HttpClient, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar) { }
  files;
  imgURL;
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
  public onSelect(data) {
    this.files = data.target.files;
    if (this.files.length === 0)
      return;
    var mimeType = this.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      console.log("Only images are supported.");
      this.files ="";
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }


  public submit(formData: NgForm) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    let data = new FormData();
    let id = this.route.snapshot.paramMap.get('_id') ? this.route.snapshot.paramMap.get('_id') : '';
    let formFinalData = formData.value;
    for (let key in formFinalData) {
      data.append(key, formFinalData[key]);
    }
    if (this.files !== undefined)
      data.append("image", this.files[0]);
    if (formData.valid) {
      this.submitted = true;
      this.http.post("http://localhost:3000/add/blogs/" + id, data).subscribe(data => {
        let ref = this.snackBar.open("Processing Data...", "Saving!", {
          duration: 2000,
        });
        ref.afterDismissed().subscribe(d => {
          this.router.navigateByUrl("home");
        });
      })
    }
  }
}
