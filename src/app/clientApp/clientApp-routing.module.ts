import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { MainComponent } from './pages/main/main.component';
import { HomeMainComponent } from './pages/home/home-main/home-main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeMainComponent
      },
      { 
        path: 'home', 
        component: HomeMainComponent 
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientAppRoutingModule { }
