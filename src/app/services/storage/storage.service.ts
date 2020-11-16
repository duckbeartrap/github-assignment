import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveSearch(query: string){
    const searches: string[] = this.getSearches();
    if(searches.length < 3){
      searches.unshift(query)
    }else{
      searches.pop();
      searches.unshift(query)
    }
    localStorage.setItem('previousSearches', JSON.stringify(searches))
  }

  getSearches(){
    const searches: string[] = JSON.parse(localStorage.getItem('previousSearches')) ? JSON.parse(localStorage.getItem('previousSearches')) : [];
    return searches;
  }
}
