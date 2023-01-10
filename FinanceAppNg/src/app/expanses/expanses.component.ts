import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expanses',
  templateUrl: './expanses.component.html',
  styleUrls: ['./expanses.component.css'],
})
export class ExpansesComponent {
  title = 'Expanses';
  date = new Date();
  @Input() name: String = '';
}
