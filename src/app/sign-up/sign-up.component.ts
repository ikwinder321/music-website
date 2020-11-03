import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var validateForm: any;
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    
    
  }
   validateForm();

}
