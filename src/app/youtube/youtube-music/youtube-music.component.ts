import { Component, OnInit } from '@angular/core';
import { YoutubeServiceService } from '../youtube-service.service';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-youtube-music',
  templateUrl: './youtube-music.component.html',
  styleUrls: ['./youtube-music.component.css']
})
export class YoutubeMusicComponent implements OnInit {
  videoList: any[] = [];
  tmpList: any[] = [];

  constructor(private youtubeService: YoutubeServiceService, private dragulaService: DragulaService) {
      const bag: any = this.dragulaService.find('bag-one');
      if (bag !== undefined ) { 
          this.dragulaService.destroy('bag-one'); 
      }
      this.dragulaService.setOptions('bag-one', { removeOnSpill: true });
   }

   ngOnInit() {
      this.videoList = this.youtubeService.getMusicVideos();
      this.youtubeService.videoAdded.subscribe(
          (newList: any[]) => this.videoList = newList
      );
  }
}
