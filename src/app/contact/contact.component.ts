import { Component,OnInit } from '@angular/core';
import { PrimeIcons } from "primeng/api";

var api:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
    public arr: any[]=[];
  
    public ngOnInit(): void {
      this.arr = [
        {
          status: "Ordered",
          date: "15/10/2020 10:30",
          icon: PrimeIcons.SHOPPING_CART,
          color: "#9C27B0",
        },
        {
          status: "Processing",
          date: "15/10/2020 14:00",
          icon: PrimeIcons.COG,
          color: "#673AB7"
        },
        {
          status: "Shipped",
          date: "15/10/2020 16:15",
          icon: PrimeIcons.ENVELOPE,
          color: "#FF9800"
        },
        {
          status: "Delivered",
          date: "16/10/2020 10:00",
          icon: PrimeIcons.CHECK,
          color: "#607D8B"
        }
      ];
    }
  }
  