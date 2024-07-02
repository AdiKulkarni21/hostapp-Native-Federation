import { Routes } from '@angular/router';

import { loadRemoteModule } from '@angular-architects/native-federation';
export const routes: Routes = [
    {
        path:'ra2',
        loadComponent : () =>
        loadRemoteModule('mfe1','./Component').then((m)=>m.AppComponent)
            
        
    },

    {
        path:'ra1',
        loadComponent:()=>
        loadRemoteModule('mfe3','./Component').then((m)=>m.AppComponent)
    }
];
