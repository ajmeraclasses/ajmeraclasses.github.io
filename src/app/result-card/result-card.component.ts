import { Component, Input } from '@angular/core';
import { Result } from './result';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css']
})
export class ResultCardComponent {
 @Input()
  result!: Result;
}
