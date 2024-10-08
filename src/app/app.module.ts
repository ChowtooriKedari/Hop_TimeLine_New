import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { ContactComponent } from './contact/contact.component';
import { HistoryComponent } from './history/history.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { BooksComponent } from './books/books.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";   
import { TimelineModule } from "primeng/timeline"; 
import { CardModule } from "primeng/card";
import { TestComponent } from './test/test.component';
import { TimelineComponent } from './timeline/timeline.component';
import { FlipbookComponent } from './flipbook/flipbook.component'; 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeCarouselComponent,
    ContactComponent,
    HistoryComponent,
    BooksComponent,
    FooterComponent,
    TestComponent,
    TimelineComponent,
    FlipbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    NgxExtendedPdfViewerModule,
    SlickCarouselModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    BrowserAnimationsModule,
    TimelineModule,
    CardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
