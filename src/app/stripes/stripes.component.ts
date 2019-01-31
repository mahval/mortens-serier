import { Component, OnInit } from '@angular/core';
import { S3Service } from '../s3.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stripes',
  templateUrl: './stripes.component.html',
  styleUrls: ['./stripes.component.scss']
})
export class StripesComponent implements OnInit {
  selectedStripe;

  constructor(
    private route: ActivatedRoute,
    private s3Service: S3Service
  ) { }

  ngOnInit() {
  }

  getStripe(): void {
    // TODO
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.s3Service.getStripe(id)
    //   .subscribe(stripe => this.selectedStripe = stripe);
  }

}
