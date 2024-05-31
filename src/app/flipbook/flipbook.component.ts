import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit, OnDestroy, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { PageFlip } from 'page-flip';
import { VgApiService } from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-flipbook',
  templateUrl: './flipbook.component.html',
  styleUrls: ['./flipbook.component.scss']
})
export class FlipbookComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() pageData = [{
    "header": "",
    "image": "",
    "text": "",
  }]; // Array of image URLs for the flipbook pageData
  @Input() pageTitle="";
  dataLoaded: boolean = false;
  @ViewChild('flipbookContainer', { static: true }) flipbookContainer!: ElementRef;
  private flipbook: PageFlip | null = null;
  private initialized: boolean = false;
  isLoading:boolean=true;
  pageFlip!: PageFlip;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log("ngOnInit: Check FlipBook");
    document.getElementById("demoBookExample1")!.style.visibility = "hidden";
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: Initialize Flipbook if data is present and not initialized');
    if (this.pageData.length > 0 && !this.initialized) {
      setTimeout(() => {
        // this.initializeFlipbook();
      }, 2000);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges: Handling changes in pageData");
    if (this.pageData.length >= 1 && changes['pageData'] && changes['pageData'].currentValue) {
      if (changes['pageData'].currentValue[0].text !== '') {
        console.log('ngOnChanges: Valid pageData found, scheduling initialization');
        setTimeout(() => {
          this.cdr.detectChanges();
           this.initializeFlipbook();
        }, 1000);
      }
    }
  }

  private initPageFlip() {
    return new PageFlip(
      this.flipbookContainer.nativeElement,
      {
        width: 550,
        height: 733,
        minWidth: 315,
        maxWidth: 900,
        minHeight: 420,
        maxHeight: 1350,
        maxShadowOpacity: 0.5,
        showCover: true,
        mobileScrollSupport: false
        }
    );
  }

  private initializeFlipbook(): void {
    if (this.initialized) return;
    console.log('Initializing flip book');

    const pages = this.flipbookContainer.nativeElement.querySelectorAll(".page");
    if (pages.length === 0) {
      console.error("No pages found for PageFlip");
      return;
    }

    this.pageFlip = this.initPageFlip();
    this.pageFlip.loadFromHTML(pages);
    (document.querySelector(".page-total")!).textContent = this.pageFlip.getPageCount().toString();
    document.querySelector(".page-orientation")!.textContent = this.pageFlip.getOrientation();

    document.querySelector(".btn-prev")!.addEventListener("click", () => {
      this.pageFlip.flipPrev();
       });

    document.querySelector(".btn-next")!.addEventListener("click", () => {
      this.pageFlip.flipNext();
    });

    this.pageFlip.on("flip", (e) => {
      document.querySelector(".page-current")!.textContent = (e.data as number + 1).toString();
    });

    this.pageFlip.on("changeState", (e) => {
      document.querySelector(".page-state")!.textContent = e.data.toString();
    });

    this.pageFlip.on("changeOrientation", (e) => {
      document.querySelector(".page-orientation")!.textContent = e.data.toString();
    });

    this.dataLoaded = true;
    this.initialized = true;
    console.log('Data is loaded');
    console.log(this.pageFlip);
    this.isLoading=false;
    document.getElementById("demoBookExample1")!.style.visibility = "visible";
  }

  onPlayerReady(api: VgApiService) {
    api.getDefaultMedia().subscriptions.ended.subscribe(
      () => {
        api.getDefaultMedia().currentTime = 0;
        api.getDefaultMedia().pause();
      }
    );
  }

  ngOnDestroy(): void {
    this.initialized = false;
          setTimeout(() => {
         this.initializeFlipbook();
      }, 5000);
    }
}