import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//import { SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import 'rxjs/Rx';

@Injectable()
export class YoutubeServiceService {
  videoAdded = new EventEmitter<any>();
  private musicList: any[] = [];
  private originalMusicList: any[] = [
      'https://www.youtube.com/embed/60ItHLz5WEA',
      'https://www.youtube.com/embed/0EWbonj7f18',
      'https://www.youtube.com/embed/9vMh9f41pqE',
      'https://www.youtube.com/embed/2fngvQS_PmQ'
  ];
  private originalSportList: any[] = [
      'https://www.youtube.com/embed/hOFU-unjYBs',
      'https://www.youtube.com/embed/zXNKIYq-lZE',
      'https://www.youtube.com/embed/U1zGzcGEMgA',
      'https://www.youtube.com/embed/wqQhQSbe6fw',
      'https://www.youtube.com/embed/st-n9eLPsvM'
  ];
  private originalFunnyList: any[] = [
      'https://www.youtube.com/embed/W8XaTZVXoVI',
      'https://www.youtube.com/embed/QpNXHJGfGYo',
      'https://www.youtube.com/embed/GgxSvFoQ59k'
  ];
  private originalOtherList: any[] = [
      'https://www.youtube.com/embed/yi0ly3gqCh4',
      'https://www.youtube.com/embed/uyMKWJ5e1kg',
      'https://www.youtube.com/embed/LUnwRFMo6D0',
      'https://www.youtube.com/embed/ozUcbeA4jjk'
  ];
   /*private originalMusicList: any[] = [
      '60ItHLz5WEA',
      '0EWbonj7f18',
      '9vMh9f41pqE',
      '2fngvQS_PmQ'
  ]; */
  
  constructor(private http: Http) {}
  
  getMusicVideos() {
      return this.originalMusicList;
  }
  
  getSportVideos() {
      return this.originalSportList;
  }
  
  getFunnyVideos() {
      return this.originalFunnyList;
  }
  
  getOtherVideos() {
      return this.originalOtherList;
  }
  
  storeMusicVideos(category) {
      if (category === 'music') {
        const body = JSON.stringify(this.originalMusicList);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.put('https://homepage-a7853.firebaseio.com/musicVideos.json', body, {headers: headers});
      }
      else if (category === 'sport') {
        const body = JSON.stringify(this.originalSportList);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.put('https://homepage-a7853.firebaseio.com/sportVideos.json', body, {headers: headers});
      }
      if (category === 'funny') {
        const body = JSON.stringify(this.originalFunnyList);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.put('https://homepage-a7853.firebaseio.com/funnyVideos.json', body, {headers: headers});
      }
      if (category === 'other') {
        const body = JSON.stringify(this.originalOtherList);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.put('https://homepage-a7853.firebaseio.com/otherVideos.json', body, {headers: headers});
      }
      else {}
  }
  
  fetchMusicVideos(category) {
      if (category === 'music') {
        return this.http.get('https://homepage-a7853.firebaseio.com/musicVideos.json')
        .map((response: Response) => response.json())
        .subscribe(
            (data: any[]) => {
                this.originalMusicList = data;
                this.videoAdded.emit(this.originalMusicList);
            }
        );
      }
      else if (category === 'sport') {
        return this.http.get('https://homepage-a7853.firebaseio.com/sportVideos.json')
        .map((response: Response) => response.json())
        .subscribe(
            (data: any[]) => {
                this.originalSportList = data;
                this.videoAdded.emit(this.originalSportList);
            }
        );
      }
      else if (category === 'funny') {
        return this.http.get('https://homepage-a7853.firebaseio.com/funnyVideos.json')
        .map((response: Response) => response.json())
        .subscribe(
            (data: any[]) => {
                this.originalFunnyList = data;
                this.videoAdded.emit(this.originalFunnyList);
            }
        );
      }
      else if (category === 'other') {
        return this.http.get('https://homepage-a7853.firebaseio.com/otherVideos.json')
        .map((response: Response) => response.json())
        .subscribe(
            (data: any[]) => {
                this.originalOtherList = data;
                this.videoAdded.emit(this.originalOtherList);
            }
        );
      }
      else {}
  }
  
  addVideoToList(newVideo, category) {
      if ( category === 'music' ) {
        this.originalMusicList.push(newVideo);
        this.videoAdded.emit(this.originalMusicList);
      }
      else if ( category === 'sport' ) {
        this.originalSportList.push(newVideo);
        this.videoAdded.emit(this.originalSportList);
      }
      else if ( category === 'funny' ) {
        this.originalFunnyList.push(newVideo);
        this.videoAdded.emit(this.originalFunnyList);
      }
      else if ( category === 'other' ) {
        this.originalOtherList.push(newVideo);
        this.videoAdded.emit(this.originalOtherList);
      }
      else {}
  }

}
