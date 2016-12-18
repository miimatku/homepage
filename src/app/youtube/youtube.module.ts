import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { YoutubeComponent }   from './youtube.component';
import { RegexUrlPipe } from '../shared/regex-url.pipe';
import { DomSanitizerPipe } from '../shared/dom-sanitizer.pipe';
import { YoutubeSidebarComponent } from './youtube-sidebar/youtube-sidebar.component';
import { YoutubeMusicComponent } from './youtube-music/youtube-music.component';
import { YoutubeSportComponent } from './youtube-sport/youtube-sport.component';
import { YoutubeServiceService } from './youtube-service.service';
import { YoutubeFunnyComponent } from './youtube-funny/youtube-funny.component';
import { YoutubeOtherComponent } from './youtube-other/youtube-other.component';

@NgModule({
    declarations: [
        YoutubeComponent,
        RegexUrlPipe,
        YoutubeSidebarComponent,
        YoutubeMusicComponent,
        YoutubeSportComponent,
        DomSanitizerPipe,
        YoutubeFunnyComponent,
        YoutubeOtherComponent
    ],
    imports: [CommonModule, YoutubeRoutingModule, DragulaModule],
    exports: [],
    providers: [YoutubeServiceService],
})
export class YoutubeModule { }
