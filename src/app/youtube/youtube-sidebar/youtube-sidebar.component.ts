import { Component} from '@angular/core';
import { YoutubeServiceService } from '../youtube-service.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-sidebar',
  templateUrl: './youtube-sidebar.component.html',
  styleUrls: ['./youtube-sidebar.component.css']
})
export class YoutubeSidebarComponent {
    private videoList: any[] = [];
    private selectedCategory: string = '';

  constructor(private sanitizer: DomSanitizer, private youtubeService: YoutubeServiceService) { }
  
  onStore() {
      this.youtubeService.storeMusicVideos(this.selectedCategory).subscribe(
          data => console.log(data),
          error => console.log(error)
      );
  }
  
  onFetch() {
      this.youtubeService.fetchMusicVideos(this.selectedCategory);
  }
  
  addVideoToList(videoId: string) {
      //this.videoList.push('https://www.youtube.com/embed/' + videoId);
      //const tmpVideo = 'https://www.youtube.com/embed/' + videoId;
      //this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + videoId);
      //this.videoList.push(this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + videoId));
      //const tmpVideo = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + videoId);
      this.youtubeService.addVideoToList('https://www.youtube.com/embed/' + videoId, this.selectedCategory);
  }
  
  onSelectCategory(gategory: string) {
      this.selectedCategory = gategory;
  }
}
