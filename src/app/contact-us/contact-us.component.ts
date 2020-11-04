import { AfterViewChecked, Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
declare var validateForm2: any;
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit,AfterViewChecked {

  constructor() { }

  ngOnInit(): void {
    $(".input").focus(function(){
      $(this).parent().addClass("focus");
  }).blur(function(){
      if($(this).val() === ''){
          $(this).parent().removeClass("focus");
      }
  })
  }
  ngAfterViewChecked(){
  
  }
  

}
