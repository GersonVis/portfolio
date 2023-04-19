import { NgModule } from '@angular/core';

import { Router, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ChatComponent } from '../chat/components/chat/chat.component';


const routes: Routes = [
    {
        path: 'main',
        component: MainComponent, 
        loadChildren: () => import('./router-child.module').then(m => m.RouterChildModule)
    },
    {
        path: 'chat',
        component: ChatComponent, 
        loadChildren: () => import('./router-child.module').then(m => m.RouterChildModule)
    },
  
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainRoutingModule { }
