import { Component } from '@angular/core';
import { TYPES_OF_CONTENT } from './variables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mortens-serier';
  types_of_content = TYPES_OF_CONTENT;
  selectedContent = this.types_of_content[0];

  selectContent(content) {
    this.selectedContent = content;
  }

  contentIsSelected(content) {
    return (content === this.selectedContent);
  }
}
