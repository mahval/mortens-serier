import { Injectable } from '@angular/core';
import { COVERS } from './variables';

@Injectable({
  providedIn: 'root'
})
export class S3Service {
  testCovers = COVERS;

  constructor() { }

  getStripe(id: number) {
    // TODO
  }

  getStory(id: number) {
    // TODO
  }

  getCover(id: number) {
    // TODO
  }

  getCoverTest(id: number) {
    return this.testCovers.find(e => e.id === id);
  }
}
