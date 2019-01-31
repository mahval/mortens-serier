import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { S3Service } from '../s3.service';

@Component({
  selector: 'app-covers',
  templateUrl: './covers.component.html',
  styleUrls: ['./covers.component.scss']
})
export class CoversComponent implements OnInit {
  selectedCover;
  selectedId: number;
  name;
  coverUrl;
  zoomedIn = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private s3Service: S3Service
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.selectedId = params['id'];
      this.selectedCover = this.getCover(+params['id']); // reset and set based on new parameter this time
    });
  }

  ngOnInit() {
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.selectedCover = this.getCover(+this.activatedRoute.snapshot.paramMap.get('id'));
    } else {
      this.initializeId();
    }
  }

  getCover(id: number) {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.selectedId = +this.activatedRoute.snapshot.paramMap.get('id');
    // this.coverUrl = '../../assets/covers/cover_0' + this.selectedId + '.jpg';
    // const id = this.route.url[0];
    // TODO
    // const id = +this.route.snapshot.paramMap.get('id');
    return this.s3Service.getCoverTest(id);
  }

  initializeId() {
    this.selectedId = 1;
    this.router.navigate(['/covers/' + this.selectedId]);
  }

  nextStripe() {
    const currentId = +this.activatedRoute.snapshot.paramMap.get('id');
    if (currentId) {
      this.router.navigate(['/covers/' + (currentId + 1)]);
    }
  }

  previousStripe() {
    const currentId = +this.activatedRoute.snapshot.paramMap.get('id');
    if (currentId > 1) {
      this.router.navigate(['/covers/' + (currentId - 1)]);
    }
  }

  toggleZoom() {
    this.zoomedIn = !this.zoomedIn;
  }

}
