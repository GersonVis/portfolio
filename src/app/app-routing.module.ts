import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainRoutingModule } from './modules/main/main-routing.module';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {enableTracing: false, useHash: true}),
    MainRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
