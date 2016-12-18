import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }   from '@angular/core';

import { YoutubeComponent } from './youtube.component';
import { YoutubeMusicComponent } from './youtube-music/youtube-music.component';
import { YoutubeSportComponent } from './youtube-sport/youtube-sport.component';
import { YoutubeFunnyComponent } from './youtube-funny/youtube-funny.component';
import { YoutubeOtherComponent } from './youtube-other/youtube-other.component';

const routes: Routes = [
    {
        path: '',
        component: YoutubeComponent,
        children: [
            {path: '', component: YoutubeMusicComponent },
            {path: 'music', component: YoutubeMusicComponent },
            {path: 'sport', component: YoutubeSportComponent },
            {path: 'funny', component: YoutubeFunnyComponent },
            {path: 'other', component: YoutubeOtherComponent }
        ]}
];

export const YoutubeRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);


/*
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YoutubeComponent } from './youtube.component';
import { YoutubeMusicComponent } from './youtube-music/youtube-music.component';
import { YoutubeSportComponent } from './youtube-sport/youtube-sport.component';
import { YoutubeFunnyComponent } from './youtube-funny/youtube-funny.component';
import { YoutubeOtherComponent } from './youtube-other/youtube-other.component';

const routes: Routes = [
    {
        path: '',
        component: YoutubeComponent,
        children: [
            {path: '', component: YoutubeMusicComponent },
            {path: 'music', component: YoutubeMusicComponent },
            {path: 'sport', component: YoutubeSportComponent },
            {path: 'funny', component: YoutubeFunnyComponent },
            {path: 'other', component: YoutubeOtherComponent }
        ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class YoutubeRoutingModule { }
*/
