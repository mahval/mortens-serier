import { Component, OnInit } from '@angular/core';
import { S3Service } from '../s3.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stripes',
  templateUrl: './stripes.component.html',
  styleUrls: ['./stripes.component.scss']
})
export class StripesComponent implements OnInit {
  selectedId;
  now = new Date();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private s3Service: S3Service
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.selectedId = params['id'];
      this.getStripe(); // reset and set based on new parameter this time
  });
  }

  ngOnInit() {
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.getStripe();
    } else {
      this.initializeId();
    }
  }

  getStripe(): void {
    this.selectedId = +this.activatedRoute.snapshot.paramMap.get('id');
    // TODO
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.s3Service.getStripe(id)
    //   .subscribe(stripe => this.selectedStripe = stripe);
  }

  initializeId() {
    this.selectedId = 1;
    this.router.navigate(['/stripes/' + this.selectedId]);
  }

  nextStripe() {
    const currentId = +this.activatedRoute.snapshot.paramMap.get('id');
    if (currentId) {
      this.router.navigate(['/stripes/' + (currentId + 1)]);
    }
  }

  previousStripe() {
    const currentId = +this.activatedRoute.snapshot.paramMap.get('id');
    if (currentId > 1) {
      this.router.navigate(['/stripes/' + (currentId - 1)]);
    this.getStripe();
    }
  }

}
