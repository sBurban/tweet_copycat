import { useState } from 'react';
import { TweetMsg } from '../../common/Types';
import Tweet from './Tweet';
import Spinner from '../Spinner';

import '../../App.css'

type Tweet_listProps = {
    data: TweetMsg[],
    editTweet: (e:React.FormEvent<HTMLFormElement>, tweet:TweetMsg) => void,
    deleteTweet: (e:React.MouseEvent<HTMLButtonElement|HTMLDivElement>, tweet:TweetMsg) => void,
}

const Tweet_list = ({data,editTweet, deleteTweet}:Tweet_listProps) => {

    const tweetslist = data.map((twt) => {
        return <Tweet key={twt.id} content={twt} editTweet={editTweet} deleteTweet={deleteTweet} />
    });

    return (
    <div className='tweets_wrapper'>
        {/* <Spinner message={"Loading..."} /> */}
        {data.length > 0 ?
            tweetslist
            : <Spinner message={"Loading..."} />
        }
    </div>);
}

export default Tweet_list;