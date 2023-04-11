import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from './home-main/home-main.component';
import { HomeHeaderComponent } from './home-header/home-header.component';



@NgModule({
  declarations: [
    HomeMainComponent,
    HomeHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
