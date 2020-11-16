import { Component, OnInit } from '@angular/core';
import { GithubService } from '@services';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'app/interfaces';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss']
})
export class DetailedPageComponent implements OnInit {

  user: IUser;

  constructor(private githubService: GithubService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe( params => {
      const id = params['params']['username'];
      if(id){
        githubService.getDetailedUser(id)
          .subscribe(user => this.user = user);
      }
    })
  }

  ngOnInit(): void {
  }

}
