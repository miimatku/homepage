import { Component, OnInit } from '@angular/core';
import { YoutubeServiceService } from '../youtube-service.service';

@Component({
  selector: 'app-youtube-funny',
  templateUrl: './youtube-funny.component.html',
  styleUrls: ['./youtube-funny.component.css']
})
export class YoutubeFunnyComponent implements OnInit {

   videoList: any[] = [];
    
    constructor(private youtubeService: YoutubeServiceService) { }
  

  ngOnInit() {
      this.videoList = this.youtubeService.getFunnyVideos();
      this.youtubeService.videoAdded.subscribe(
          (newList: any[]) => this.videoList = newList
      );
  }

}
