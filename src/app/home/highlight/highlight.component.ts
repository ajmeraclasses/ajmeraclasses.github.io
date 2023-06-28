import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css'],
})
export class HighlightComponent {
  @Input() highlight:string = "Highlight";
  @Input() desc:string = " Experience personalized growth with Ajmera Classes individual attention. Our dedicated instructors tailor learning to your unique needs, ensuring maximum understanding and success. Stand out and thrive!";
}
