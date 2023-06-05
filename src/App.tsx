import { useState, useEffect } from 'react'
import './App.css'
import FormatDate from './utils/FormatDate';
import Jsondata from './data/data';
import { TweetMsg,TweetEventProps } from './common/Types';

import Tweet_list from './components/Tweets/Tweet_list';
import Post from './components/Post';


function App() {
  const [data, setData] = useState<TweetMsg[]>([]);
  const default_timestamp = FormatDate();
  const waitTime = 500;

  useEffect(() => {
    setTimeout(() => {
      const addTimestamps = Jsondata.map(r => {
        return {...r, timestamp: default_timestamp}
      });
      setData(addTimestamps);
    }, waitTime);
  }, [])

  const addTweetToList = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const txtVal = target.new_message.value;

    const newTweet = {
      id: data.length,
      name: "anonymous",
      username: "anonymous",
      isDeleted: false,
      timestamp: default_timestamp,
      message: txtVal
    };
    setData([ newTweet, ...data]);
  }

  const editTweet = (e:React.FormEvent<HTMLFormElement>, tweet:TweetMsg) => {
    e.preventDefault();
    const target = e.currentTarget;
    const txtVal = target.edit_message.value;

    const reformatList = data.map(r => {
        if(r.id !== tweet.id) return r;
        return {
          ...tweet,
          message: txtVal
        }
    });
    setData(reformatList)
  }

  const deleteTweet = (e:React.MouseEvent<HTMLButtonElement|HTMLDivElement>, tweet:TweetMsg) => {
    e.preventDefault();
    console.log(e);
    console.log(tweet);

    const reformatList = data.filter(r => {
        if(r.id !== tweet.id) return true;
        return false;
    });
    setData(reformatList)
  }


  return (
    <div className='app_body'>
      <Post postTweet={addTweetToList} />
      <Tweet_list
        data={data}
        editTweet={editTweet}
        deleteTweet={deleteTweet}
      />
    </div>
  );
}

export default App
