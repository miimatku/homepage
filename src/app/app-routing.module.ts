import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }   from '@angular/core';

import { HomeComponent } from './home/home.component';
//import { YoutubeComponent } from './youtube/youtube.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'youtube', loadChildren: 'app/youtube/youtube.module#YoutubeModule' },
    {path: 'test', component: TestComponent },
    {path: 'shoppingcart', loadChildren: 'app/shopping-cart/shopping-cart.module#ShoppingCartModule' }
];

export const HomepageRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);


/*
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
//import { YoutubeComponent } from './youtube/youtube.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'youtube', loadChildren: 'app/youtube/youtube.module#YoutubeModule' },
    {path: 'test', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomepageRoutingModule { }
*/