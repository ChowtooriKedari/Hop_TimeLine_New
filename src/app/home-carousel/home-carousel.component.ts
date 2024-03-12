import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import {SlickCarouselComponent} from 'ngx-slick-carousel'
declare var $: any;  

  @Component({
    selector: 'app-home-carousel',
    templateUrl: './home-carousel.component.html',
    styleUrls: ['./home-carousel.component.scss'],
  })
export class HomeCarouselComponent implements OnInit, AfterViewInit {
 @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  ngAfterViewInit() {
  }
  ngOnInit(): void {
    console.log('AB');
    $('.slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      prevArrow: '<span class="prev_arrow"><img src="./assets/arrow-bar-left.svg" alt="left arrow icon"></span>',
      nextArrow: '<span class="next_arrow"><img src="./assets/arrow-bar-right.svg" alt="right arrow icon"></span>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  slides = [
    {img: "./assets/1.jpg"},
    {img: "./assets/2.jpeg"},
    {img: "./assets/3.jpg"},
    {img: "./assets/1.jpg"}
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "infinite": true,
  "dots": true,
  "autoplay": true,
  "autoplaySpeed": 2000  };
    
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e:any) {
  }
  
  breakpoint(e:any) {
  }
  
  afterChange(e:any) {
  }
  
  beforeChange(e:any) {
  }
}

