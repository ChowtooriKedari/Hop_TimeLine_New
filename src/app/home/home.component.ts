import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HtmlLoaderService } from '../../assets/html-loader.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('htmlContainer', { static: false }) htmlContainer!: ElementRef;

  constructor(private htmlLoaderService: HtmlLoaderService) {}

  ngAfterViewInit(): void {
    this.htmlLoaderService.getHtmlContent('assets/intro.html').subscribe(content => {
      this.htmlContainer.nativeElement.innerHTML = content;
      setTimeout(() => this.applyLettering(), 0);
    });
  }

  applyLettering(): void {
    if ($) {
      $("#os-phrases > h2").css('opacity', 1).lettering('words')
        .children("span").lettering()
        .children("span").lettering();
    }
  }
  scrollDown(): void {
    window.scrollBy({
      top: window.innerHeight / 1.5,
      behavior: 'smooth'
    });
  }
  
}
