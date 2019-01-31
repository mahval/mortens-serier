import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-covers',
  templateUrl: './covers.component.html',
  styleUrls: ['./covers.component.scss']
})
export class CoversComponent implements OnInit {
  selectedId: number;
  zoomedIn = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.getCover();
    } else {
      this.initializeId();
    }
  }

  getCover(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    this.selectedId = +this.activatedRoute.snapshot.paramMap.get('id');
    // const id = this.route.url[0];
    // TODO
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.s3Service.getStripe(id)
    //   .subscribe(stripe => this.selectedStripe = stripe);
  }

  initializeId() {
    this.selectedId = 1;
    this.router.navigate(['/covers/' + this.selectedId]);
  }

  toggleZoom() {
    this.zoomedIn = !this.zoomedIn;
  }

}
