import { GithubUser } from "types/users";

export const isGithubUser = (user : any): user is GithubUser => 'id'  in user;