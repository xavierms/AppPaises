import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
import { Error404Component } from './error404/error404.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes= [
    // {
    //     path:'',
    //     component: LayoutComponent,
    //     children:[]
    // }
    {
        path:'',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/: id',
        component: VerPaisComponent
    },
    {
        path: '**',
        component: Error404Component
    }
];


@NgModule({
    imports:[
       RouterModule.forRoot( routes )
    ],
    exports:[
       RouterModule
    ]
})


export class APPRoutingModule{}