export type TweetMsg = {
    id: number,
    name: string,
    username: string,
    isDeleted: boolean,
    timestamp: string,
    message: string
}

export type TweetEventProps = {
    e:React.MouseEvent<HTMLButtonElement>,
    tweet:TweetMsg
}