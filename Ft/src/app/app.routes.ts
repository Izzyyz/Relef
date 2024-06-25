import { Routes } from '@angular/router';
import { NavComponent } from "../app/resources/nav/nav.component";
import { InitComponent } from "../app/resources/init/init.component";
import { StoreComponent } from "../app/resources/store/store.component";
import { AboutComponent } from "../app/resources/about/about.component";
import { AscComponent } from "../app/resources/asc/asc.component";
import { LogComponent } from "../app/resources/log/log.component";
import { ResComponent } from "../app/resources/res/res.component";
import { Nf404Component } from "../app/resources/nf404/nf404.component";
import { TestsComponent } from "../app/resources/tests/tests.component";
import { PromComponent } from "../app/resources/prom/prom.component";

export const routes: Routes = [
    {path:"nav",title:"Nav",component:NavComponent},
    {path:"home",title:"Home",component:InitComponent},
    {path:"store",title:"Store",component:StoreComponent},
    {path:"about",title:"About Us",component:AboutComponent},
    {path:"routines",title:"Routines",component:AscComponent},
    {path:"login",title:"Login",component:LogComponent},
    {path:"sign Up",title:"Sign Up",component:ResComponent},
    {path:"test",title:"Test",component:TestsComponent},
    {path:"prom",title:"Prom",component:PromComponent},
    {path: "", redirectTo: "home", pathMatch: "full" },
    {path: "**",title: "404 | Page Not Found",component:Nf404Component},
];
