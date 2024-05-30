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
  dataItems: any[] = [
    {
      name: 'name',
      url: 'https://images.pexels.com/photos/159353/survey-opinion-research-voting-fill-159353.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
      description: 'description',
      date: new Date(2016, 6, 28)
    },
    {
      name: 'name',
      url: 'https://images.pexels.com/photos/8769/pen-writing-notes-studying.jpg?w=1260&h=750&auto=compress&cs=tinysrgb',
      description: 'description',
      date: new Date(2016, 6, 30)
    },
    {
      name: 'name',
      url: 'https://images.pexels.com/photos/459793/pexels-photo-459793.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
      description: 'description',
      date: new Date(2016, 7, 15)
    }
  ];
  ngOnInit()  
  {  
   
  }  
}   