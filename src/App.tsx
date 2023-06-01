import { useState, useEffect } from 'react'
import './App.css'
import FormatDate from './utils/FormatDate';
import Jsondata from './data/data';
import { TweetMsg } from './common/Types';

import Tweet_list from './components/Tweets/Tweet_list';
import Post from './components/Post';
//1 Post-tweet component
//1 Tweet list component
//1 Tweet component
//1 Edit tweet component
//1 delete function


function App() {
  const [data, setData] = useState<TweetMsg[]>([]);
  const default_timestamp = FormatDate();
  const waitTime = 0;

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
      name: "anonymous",
      username: "anonymous",
      isDeleted: false,
      timestamp: default_timestamp,
      message: txtVal
    };
    setData([ newTweet, ...data]);
  }

  const editTweet = (e:React.FormEvent<HTMLFormElement>) => {
    return;
  }

  const deleteTweet = (e:React.MouseEventHandler<HTMLButtonElement>) => {
    return;
  }


  return (
    <div className='app_body'>
      <Post handleSubmit={addTweetToList} />
      <Tweet_list data={data} />
    </div>
  );
}

export default App
