import { useState, useEffect } from 'react'
import './App.css'
import FormatDate from './utils/FormatDate';
import Jsondata from './data/data';
import Tweet_list from './components/Tweets/Tweet_list';
import { TweetMsg } from './common/Types';

//1 Post-tweet component
//1 Tweet list component
//1 Tweet component
//1 Edit tweet component
//1 delete function



function App() {
  const [data, setData] = useState<TweetMsg[]>([]);
  const default_timestamp = FormatDate();

  useEffect(() => {
    setTimeout(() => {
      const addTimestamps = Jsondata.map(r => {
        return {...r, timestamp: default_timestamp}
      });
      setData(addTimestamps);
    }, 1000);
  }, [data.length])


  return (
    <div className='app_body'>
      <Tweet_list data={data} />
    </div>
  );
}

export default App
