import { useState } from 'react';
import { TweetMsg } from '../../common/Types';
import { FaUserCircle,FaEdit,FaRegTrashAlt,FaRegComment,FaRegHeart,FaRetweet } from 'react-icons/fa';

import '../../App.css'

type TweetProps = {
    content: TweetMsg
}

const Tweet = ({content}:TweetProps) => {

    if(content.isDeleted) return <></>;

    return (
    <div className='tweet'>
        <div className='tweet_header'>
            <FaUserCircle />
            <span className='tweet_name'> {content.name} </span>
            <span className='tweet_username'> @{content.username} </span>
        </div>
        <div className='tweet_body'>
            <p>{content.message}</p>
        </div>
        <div className='tweet_controls'>
            <div className='tweet_controls__group'>
                <div className='tweet_controls__icon tweet_controls__edit'> <FaEdit /> </div>
                <div className='tweet_controls__icon tweet_controls__delete'> <FaRegTrashAlt /> </div>
            </div>
            <div className='tweet_controls__group'>
                <div className='tweet_controls__icon tweet_controls__comment'> <FaRegComment /> </div>
                <div className='tweet_controls__icon tweet_controls__like'> <FaRegHeart /> </div>
                <div className='tweet_controls__icon tweet_controls__share'> <FaRetweet /> </div>
            </div>
            <div className='tweet_timestamp'> {content.timestamp} </div>
        </div>
    </div>
    );
}

export default Tweet;