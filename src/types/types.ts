export interface Post {
    id: number,
    name: string
}

export interface Posts {
    posts: Array<Post>
}

export interface State extends Posts {
    page: number
    limit: number
}