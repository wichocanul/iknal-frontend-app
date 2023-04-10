import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeModule } from './pages/home/home.module';

//Components
import { MainComponent } from './pages/main/main.component';
import { ClientAppRoutingModule } from './clientApp-routing.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ClientAppRoutingModule,
    HomeModule
  ]
})
export class ClientAppModule { }
