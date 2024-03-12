import { Component, OnInit } from '@angular/core';  
declare var $: any;  
var name:string;
var title;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {  
  name = 'Jquery Integration With Angular!';  
  isJqueryWorking: any;  
  title = 'hop_timeline_Project';

  ngOnInit()  
  {  
   
  }  
}   