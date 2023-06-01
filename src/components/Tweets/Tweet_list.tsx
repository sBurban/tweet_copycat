import { useState } from 'react';
import { TweetMsg } from '../../common/Types';
import Tweet from './Tweet';
import Spinner from '../Spinner';

import '../../App.css'

type Tweet_listProps = {
    data: TweetMsg[]
}

const Tweet_list = ({data}:Tweet_listProps) => {

    const tweetslist = data.map((twt, i) => {
        return <Tweet key={i} content={twt} />
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