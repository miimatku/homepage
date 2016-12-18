import { Component, OnInit } from '@angular/core';
import { YoutubeServiceService } from '../youtube-service.service';

@Component({
  selector: 'app-youtube-sport',
  templateUrl: './youtube-sport.component.html',
  styleUrls: ['./youtube-sport.component.css']
})
export class YoutubeSportComponent implements OnInit {
    videoList: any[] = [];
    
    constructor(private youtubeService: YoutubeServiceService) { }
  

  ngOnInit() {
      this.videoList = this.youtubeService.getSportVideos();
      this.youtubeService.videoAdded.subscribe(
          (newList: any[]) => this.videoList = newList
      );
  }

}
