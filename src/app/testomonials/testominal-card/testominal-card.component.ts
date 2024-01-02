import { Component, Input } from '@angular/core';
import { Testimonial } from '../testimoinal';

@Component({
  selector: 'app-testominal-card',
  templateUrl: './testominal-card.component.html',
  styleUrls: ['./testominal-card.component.css']
})
export class TestominalCardComponent {
  @Input() testimonial!:Testimonial;
}
