import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AccordionComponent } from './accordion/accordion.component';
import { PopoverComponent } from './popover/popover.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';


const routes: Routes = [
  {
    path:"modal",
    component: ModalComponent
  },
  {
    path: "carousel",
    component: CarouselComponent
  },
  {
    path: "accordion",
    component: AccordionComponent
  },
  {
    path: "popover",
    component: PopoverComponent
  },
  {
    path: "typeahead",
    component: TypeaheadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
