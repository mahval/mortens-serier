import { Component } from '@angular/core';
import { TYPES_OF_CONTENT } from './variables';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mortens-serier';
  types_of_content = TYPES_OF_CONTENT;
  selectedContent = this.types_of_content[0];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  selectContent(content) {
    this.router.navigateByUrl('/' + content.link);
  }

  contentIsSelected(content) {
    return (('/' + content.link) === this.router.url);
  }
}
