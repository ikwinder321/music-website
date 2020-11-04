import { AfterViewChecked, Component, OnInit } from '@angular/core';
declare var validateNewsLetter: any;
@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit,AfterViewChecked {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewChecked(){
    
  }

}
