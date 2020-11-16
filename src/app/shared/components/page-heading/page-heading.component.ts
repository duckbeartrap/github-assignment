import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-heading',
  templateUrl: './page-heading.component.html',
  styleUrls: ['./page-heading.component.scss']
})
export class PageHeadingComponent implements OnInit {
  @Input() headingText: string = 'Heading';
  @Input() showGridToggle: boolean = false;
  @Input() gridView: boolean = false;
  @Output() onGridToggle: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleGrid(viewGrid: boolean){
    this.gridView = viewGrid;
    this.onGridToggle.emit(this.gridView);
  }

}
