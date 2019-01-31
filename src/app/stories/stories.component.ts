import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { S3Service } from '../s3.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  selectedId;
  now = new Date();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private s3Service: S3Service
  ) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.getStory();
    } else {
      this.initializeId();
    }
  }

  getStory(): void {
    this.selectedId = +this.activatedRoute.snapshot.paramMap.get('id');
    // TODO
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.s3Service.getStripe(id)
    //   .subscribe(stripe => this.selectedStripe = stripe);
  }

  initializeId() {
    this.selectedId = 1;
    this.router.navigate(['/stories/' + this.selectedId]);
  }

}
