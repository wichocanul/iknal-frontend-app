import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'chignahuapan',
    loadChildren: () => import('./clientApp/clientApp.module').then( m => m.ClientAppModule )
  },
  {
    path: '**',
    redirectTo: 'chignahuapan'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
