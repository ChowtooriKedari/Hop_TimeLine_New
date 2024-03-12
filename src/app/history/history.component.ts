import { Component,OnInit } from '@angular/core';
import {PageFlip} from 'page-flip';
import {VgApiService} from '@videogular/ngx-videogular/core';
var api:any;
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent  implements OnInit{
  pageFlip!: PageFlip;
  arr: any; 

  ngOnInit(): void {

	this.arr = [ 
	{ 
		status: "Time1", 
	}, 
	{ 
		status: "Time2", 
	}, 
	{ 
		status: "Time3", 
	}, 
	{ 
		status: "Time4", 
	}, 
	]; 
    var temp=document.getElementById("demoBookExample")
    const pageFlip = new PageFlip(
      document.getElementById("demoBookExample")!,
      {
          width: 550, // base page width
          height: 733, // base page height

          // set threshold values:
          minWidth: 315,
          maxWidth: 1000,
          minHeight: 420,
          maxHeight: 1350,

          maxShadowOpacity: 0.5, // Half shadow intensity
          showCover: true,
          mobileScrollSupport: false // disable content scrolling on mobile devices
      }
  );

  // load pages
  pageFlip.loadFromHTML(document.querySelectorAll(".page"));

  (document.querySelector(".page-total")!).textContent = pageFlip.getPageCount().toString();
  document.querySelector(".page-orientation")!.textContent = pageFlip.getOrientation();

  document.querySelector(".btn-prev")!.addEventListener("click", () => {
      pageFlip.flipPrev(); // Turn to the previous page (with animation)
  });

  document.querySelector(".btn-next")!.addEventListener("click", () => {
      pageFlip.flipNext(); // Turn to the next page (with animation)
  });

  // triggered by page turning
  pageFlip.on("flip", (e) => {
      document.querySelector(".page-current")!.textContent = ( e.data as number + 1).toString();
  });

  // triggered when the state of the book changes
  pageFlip.on("changeState", (e) => {
      document.querySelector(".page-state")!.textContent = e.data.toString();
  });

  // triggered when page orientation changes
  pageFlip.on("changeOrientation", (e) => {
      document.querySelector(".page-orientation")!.textContent = e.data.toString();
  });
}

onPlayerReady(api: VgApiService) {

  api.getDefaultMedia().subscriptions.ended.subscribe(
      () => {
          // Set the video to the beginning
          api.getDefaultMedia().currentTime = 0;
      }
  );
}
}