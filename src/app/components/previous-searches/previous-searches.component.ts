import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-previous-searches',
  templateUrl: './previous-searches.component.html',
  styleUrls: ['./previous-searches.component.scss']
})
export class PreviousSearchesComponent implements OnInit {
  @Input() previousSearches: string[] = [];
  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  searchUser(query: string){
    this.onSearch.emit(query);
  }

}
