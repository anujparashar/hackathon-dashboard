export interface CHALLENGE_TYPE {
    id: number,
    title: string,
    description: string,
    tags: string[],
    creationDate: string,
    likes: LIKE_TYPE
}
export interface LIKE_TYPE {
    count: number,
    liked: boolean
}