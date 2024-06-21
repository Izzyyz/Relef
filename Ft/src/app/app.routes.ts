import { Routes } from '@angular/router';
import { NavComponent } from "../app/resources/nav/nav.component";
import { InitComponent } from "../app/resources/init/init.component";
import { StoreComponent } from "../app/resources/store/store.component";
import { AboutComponent } from "../app/resources/about/about.component";
import { AscComponent } from "../app/resources/asc/asc.component";
import { LogComponent } from "../app/resources/log/log.component";
import { ResComponent } from "../app/resources/res/res.component";
import { Nf404Component } from "../app/resources/nf404/nf404.component";

export const routes: Routes = [
    {path:"nav",title:"Nav",component:NavComponent},
    {path:"home",title:"Home",component:InitComponent},
    {path:"store",title:"Store",component:StoreComponent},
    {path:"about",title:"About Us",component:AboutComponent},
    {path:"asc",title:"Routines",component:AscComponent},
    {path:"log",title:"Login",component:LogComponent},
    {path:"res",title:"Register",component:ResComponent},
    {path: "", redirectTo: "home", pathMatch: "full" },
    {path: "**",title: "404 | Page Not Found",component:Nf404Component},
];
