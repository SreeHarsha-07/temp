import { Component, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {
  @Input() user:User;
}
