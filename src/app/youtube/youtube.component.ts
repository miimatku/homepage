import { Component } from '@angular/core';
//import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent {
/*
  private originalList: any[] = [
      'https://www.youtube.com/embed/60ItHLz5WEA',
      'https://www.youtube.com/embed/0EWbonj7f18',
      'https://www.youtube.com/embed/9vMh9f41pqE',
      'https://www.youtube.com/embed/2fngvQS_PmQ'
  ];
  private videoList: any[] = [

  ];
  trustedUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
      
   }

  ngOnInit() {
      for (let index = 0; index < this.originalList.length; index++) {
          let videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.originalList[index]);
          this.videoList.push(videoUrl);
      }
      
  }
  
  addVideoToList(videoId: string) {
      //this.videoList.push('https://www.youtube.com/embed/' + videoId);
      //const tmpVideo = 'https://www.youtube.com/embed/' + videoId;
      //this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + videoId);
      this.videoList.push(this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + videoId));
  } */

}
