import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  searchQuery: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  searchUser(){
    this.onSearch.emit(this.searchQuery);
    console.log(this.searchQuery);
  }

}
