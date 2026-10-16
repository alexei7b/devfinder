
export type LocalGithubUser = {
    login: string,
    avatar: string,
    name: string,
    company: string,
    location: string,
    bio: string,
    twitter: string,
    repos: number,
    followers: number,
    following: number,
    created: string,
    blog: string,
    id: number
}

export type GithubUser = {
    login: string,
    id: number,
    avatar_url: string,
    name: string,
    company: string,
    location: string,
    bio: string,
    twitter_username: string,
    public_repos: number,
    followers: number,
    following: number,
    created_at: string,
    blog: string
}


export type GithubError = {
    message: string,
    documentation_url: string
}