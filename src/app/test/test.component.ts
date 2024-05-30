import { Component,NgModule } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { OnInit } from '@angular/core';
import { PrimeIcons } from "primeng/api";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  animations: [
    trigger('enlargeOnHover', [
      state('normal', style({
        transform: 'scale(1)',
        zIndex: 1
      })),
      state('enlarged', style({
        transform: 'scale(1.2)',
        zIndex: 2
      })),
      transition('normal <=> enlarged', animate('0.3s ease-in-out'))
    ])
  ]
})

export class TestComponent implements OnInit {
  public arr: any[]=[];
  
  public ngOnInit(): void {
    this.arr = [
      {
        status: "Ordered",
        date: "15/10/2020 10:30",
        icon: PrimeIcons.SHOPPING_CART,
        color: "#9C27B0",
        name: 'Item 1', 
        state: 'normal'
      },
      {
        status: "Processing",
        date: "15/10/2020 14:00",
        icon: PrimeIcons.COG,
        color: "#673AB7",
        name: 'Item 2', 
        state: 'normal'
      },
      {
        status: "Shipped",
        date: "15/10/2020 16:15",
        icon: PrimeIcons.ENVELOPE,
        color: "#FF9800",
        name: 'Item 3', 
        state: 'normal'
      },
      {
        status: "Delivered",
        date: "16/10/2020 10:00",
        icon: PrimeIcons.CHECK,
        color: "#607D8B",
        name: 'Item 4', 
        state: 'normal'
      }
    ];
  }
  items = [
    { name: 'Item 1', state: 'normal' },
    { name: 'Item 2', state: 'normal' },
    { name: 'Item 3', state: 'normal' },
    { name: 'Item 4', state: 'normal' },
    { name: 'Item 5', state: 'normal' },
  ];
  currentIndex = 0;
  maxVisibleItems=0;

  constructor() {
    this.setMaxVisibleItems();
    window.addEventListener('resize', () => {
      this.setMaxVisibleItems();
      this.adjustSlide();
    });
  }

  setMaxVisibleItems() {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1080) {
      this.maxVisibleItems = 3;
    } else if (screenWidth >= 500 && screenWidth <= 1080) {
      this.maxVisibleItems = 2;
    } else {
      this.maxVisibleItems = 1;
    }
  }

  adjustSlide() {
    const totalItems = this.arr.length;
    if (totalItems <= this.maxVisibleItems) {
      this.currentIndex = 0;
    } else if (this.currentIndex >= totalItems - this.maxVisibleItems) {
      this.currentIndex = totalItems - this.maxVisibleItems;
    }
  }

  nextSlide() {
    if (this.currentIndex < this.arr.length - this.maxVisibleItems) {
      this.currentIndex++;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
  onMouseEnter(item: any) {
    item.state = 'enlarged';
  }

  onMouseLeave(item: any) {
    item.state = 'normal';
  }

  handleItemClick(event: MouseEvent) {
    // Handle item click event
    event.preventDefault();
    console.log('Item clicked!');
  }
}

