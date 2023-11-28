import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>comments works!</p>`
})
export class CommentsComponent {
  constructor() {
    Array.from(Array(10000000).keys()).forEach(() => {});
  }
}
