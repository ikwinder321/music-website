import { Component, OnInit } from '@angular/core';
declare var alertIt: any;
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  alertIt();
}
