import { useState, useEffect } from 'react'

import FormatDate from '../utils/FormatDate';
import Jsondata from '../data/data';
import { TweetMsg } from '../common/Types';

const useTweetlist = () => {
    const [tweetList, setTweetList] = useState<TweetMsg[]>([]);
    const [error, setError] = useState<string|null>();
    const default_timestamp = FormatDate();
    const waitTime = 500;

    useEffect(() => {
        setTimeout(() => {
            getTweetsData();
        }, waitTime);
    }, [])
    const getTweetsData = () => {
        try {
            const response = {
                data: Jsondata.map(r => {
                    return {...r, timestamp: default_timestamp}
                })
            };
            setTweetList(response.data);
        } catch (error) {
            console.log("🚀 ~ file: useTweetlist.ts:23 ~ getTweetsData ~ error:", error)
            setError("Unexpected error fetching Tweets");
            setTweetList([]);
        }
    }

    return {tweetList, error};
};

export default useTweetlist;