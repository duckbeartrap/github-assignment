import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ErrorService } from '@services';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Observable,  forkJoin, throwError } from 'rxjs';
import { IUser, IRepo, IOrganization} from '@interfaces';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  private getSingleUser(id: string): Observable<IUser>{
    return this.http.get(environment.API_URL + 'users/' + id)
        .pipe(
          map( res => {
            const user: IUser = {
              name: res['login'],
              type: res['type'],
              avatar: res['avatar_url'],
              url: res['html_url'],
              repos: [],
              fullName: res['name']
            }
            return user;
          }),
          catchError(err => throwError(this.errorService.handleError(err)))
        )
  }

  private getPopularUsers(): Observable<IUser[]>{
    const options = {
      params: {
        q: decodeURIComponent('followers%3A%3E%3D10000'),
        type: 'Users',
        page: '1',
        per_page: '2'
      }
    };

    return this.http.get(environment.API_URL + 'search/users', options)
      .pipe(
        map(response => {
          const users: IUser[] = [];
          response['items'].forEach(item => {
            let user: IUser = {
              name: item.login,
              type: item.type,
              avatar: item.avatar_url,
              url: item.html_url,
              repos: []
            };
            users.push(user);
          });

          return users;
        }),
        catchError(err => throwError(this.errorService.handleError(err)))
      )
  }

  private getRepo(id:string): Observable<IRepo[]>{
    const options = {
      params: {
        page: '1',
        per_page: '2'
      }
    };
    return this.http.get(environment.API_URL + 'users/' + id + '/repos', options)
      .pipe(
        map((response: any[]) => {
          const repos: IRepo[] = [];
          response.forEach( repo => {
            let newRepo: IRepo = {
              name: repo.name,
              url: repo.html_url
            }
            repos.push(newRepo)
          });

          return repos;
        }),
        catchError(err => throwError(this.errorService.handleError(err)))
      )
  }

  private getOrganizations(id: string): Observable<IOrganization[]>{
    const options = {
      params: {
        page: '1',
        per_page: '3'
      }
    };
    return this.http.get(environment.API_URL + 'users/' + id + '/orgs', options)
        .pipe(
          map( (res: any[]) => {
            const orgs: IOrganization[] = [];
            res.forEach(item => {
              let org: IOrganization = {
                name: item.login,
                avatar: item.avatar_url,
                url: item.url
              }
              orgs.push(org);
            })
            return orgs;
          }),
          catchError(err => throwError(this.errorService.handleError(err)))
        )
  }

  getUserList(): Observable<IUser[]>{
    return this.getPopularUsers()
      .pipe(
        switchMap( users => {   
          return forkJoin(
            users.map(user => {
              return this.getRepo(user.name)
                .pipe(
                  map( repos => {
                    user.repos = repos;
                    return user;
                  }),
                )
            })
          )
        }),
        catchError(err => throwError(this.errorService.handleError(err)))
      )
  }

  getDetailedUser(id): Observable<IUser>{
    return forkJoin([this.getSingleUser(id), this.getRepo(id), this.getOrganizations(id)])
      .pipe( 
        map( res => {
            console.log(res);
            const detailedUser: IUser = res[0];
            detailedUser.repos = res[1];
            detailedUser.orgs = res[2];
            console.log(detailedUser);
            return detailedUser;
          }
        ),
        catchError(err => throwError(this.errorService.handleError(err)))
      )
  }
}
