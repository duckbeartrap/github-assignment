import { Component, OnInit } from '@angular/core';
import { GithubService } from '@services';
import { ActivatedRoute } from '@angular/router';
import { IUser, IError } from 'app/interfaces';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss']
})
export class DetailedPageComponent implements OnInit {

  user: IUser;
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private githubService: GithubService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe( params => {
      this.loading = true;
      const id = params['params']['username'];
      if(id){
        githubService.getDetailedUser(id)
          .subscribe(
            user => {
              this.user = user;
              this.loading = false;
            }, 
            (err: IError) => {
              this.errorMessage = err.message;
              this.loading = false;
            }
          
          );
      }else{
        this.loading = false;
      }
    })
  }

  ngOnInit(): void {
  }

}
