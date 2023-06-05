import { useState, useEffect, useReducer } from 'react'
import './App.css'
import useTweetlist from './hooks/useTweetlist';

import { TweetMsg } from './common/Types';

import Tweet_list from './components/Tweets/Tweet_list';
import Post from './components/Post';
import TweetsReducer, { ActionTypes } from './store/TweetsReducer';


function App() {
  const {tweetList, error} = useTweetlist();
  const [state, dispatch] = useReducer(TweetsReducer, {data:tweetList});

  useEffect(() => {
    dispatch({type: ActionTypes.SET_TWEETS, data: tweetList});
  }, [tweetList.length])


  const addTweetToList = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const txtVal = target.new_message.value;
    dispatch({type: ActionTypes.ADD_TWEET, text: txtVal});
  }

  const editTweet = (e:React.FormEvent<HTMLFormElement>, tweet:TweetMsg) => {
    e.preventDefault();
    const target = e.currentTarget;
    const txtVal = target.edit_message.value;
    dispatch({type: ActionTypes.EDIT_TWEET, tweet, text: txtVal});
  }

  const deleteTweet = (e:React.MouseEvent<HTMLButtonElement|HTMLDivElement>, tweet:TweetMsg) => {
    e.preventDefault();
    dispatch({type: ActionTypes.DELETE_TWEET, id: tweet.id});
  }


  return (
    <div className='app_body'>
      <Post postTweet={addTweetToList} />
      <Tweet_list
        data={state.data}
        editTweet={editTweet}
        deleteTweet={deleteTweet}
      />
    </div>
  );
}

export default App
