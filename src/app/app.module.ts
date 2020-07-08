import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AccordionComponent } from './accordion/accordion.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    CarouselComponent,
    AccordionComponent,
    TypeaheadComponent,
    PopoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
