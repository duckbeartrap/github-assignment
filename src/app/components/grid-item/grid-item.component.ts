import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '@interfaces';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {
  @Input() userData: IUser;
  constructor() { }

  ngOnInit(): void {
  }

}
