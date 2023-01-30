import { Component, Input } from '@angular/core';
import { List } from '../list';

@Component({
  selector: 'app-expanses',
  templateUrl: './expanses.component.html',
  styleUrls: ['./expanses.component.css'],
})
export class ExpansesComponent {
  list: List = {
    id: 1,
    name: 'apple',
    price: 10,
    good: true,
    service: false,
  };
}
