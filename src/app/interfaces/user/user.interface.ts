import { IRepo, IOrganization } from '@interfaces';

export interface IUser {
    avatar: string,
    name: string,
    fullName?: string,
    type: string,
    repos: IRepo[],
    url: string,
    orgs?: IOrganization[]
}