import { Component, OnInit,Input,Output } from '@angular/core';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  // styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor() { }
  @Input() form:any;
  @Input() field:any;
 
  ngOnInit() {
  
  }

}
