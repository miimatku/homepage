import { Component, OnInit } from '@angular/core';
import { YoutubeServiceService } from '../youtube-service.service';

@Component({
  selector: 'app-youtube-other',
  templateUrl: './youtube-other.component.html',
  styleUrls: ['./youtube-other.component.css']
})
export class YoutubeOtherComponent implements OnInit {
  videoList: any[] = [];
    
    constructor(private youtubeService: YoutubeServiceService) { }
  

  ngOnInit() {
      this.videoList = this.youtubeService.getOtherVideos();
      this.youtubeService.videoAdded.subscribe(
          (newList: any[]) => this.videoList = newList
      );
  }
}
