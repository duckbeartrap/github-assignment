import { Component, OnInit } from '@angular/core';
import { GithubService, StorageService } from '@services';
import { IUser, IError } from '@interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  githubUsers: IUser[];
  gridView: boolean = true;
  previousSearches: string[];
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private githubService: GithubService, private router: Router, private storageService: StorageService) {
    this.loading = true;
    this.githubService.getUserList()
    .subscribe(
      users => {
        this.githubUsers = users;
        this.loading = false;
      }, 
      (err: IError) => {
        this.errorMessage = err.message;
        this.loading = false;
      }
    );
    this.previousSearches = this.storageService.getSearches();
  }

  ngOnInit(): void {
  }

  toggleGridView(event: boolean){
    this.gridView = event;
  }

  searchUser(event){
    this.storageService.saveSearch(event);
    this.router.navigate([event]);
  }
}
