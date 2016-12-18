/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { YoutubeServiceService } from './youtube-service.service';

describe('Service: YoutubeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoutubeServiceService]
    });
  });

  it('should ...', inject([YoutubeServiceService], (service: YoutubeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
