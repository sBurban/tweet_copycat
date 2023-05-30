import { useState } from 'react';
import { TweetMsg } from '../../common/Types';
import Tweet from './Tweet';


import '../../App.css'

type Tweet_listProps = {
    data: TweetMsg[]
}

const Tweet_list = ({data}:Tweet_listProps) => {

    const tweetslist = data.map((twt, i) => {
        return <Tweet content={twt} />
    });

    return (
    <div className='tweets_wrapper'>
        {data.length > 0 ?
            tweetslist
            : <div> loading...</div>
        }
    </div>);
}

export default Tweet_list;