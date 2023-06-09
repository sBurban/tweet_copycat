import { useState } from 'react';
import '../App.css'
import Textarea from './Textarea';

type PostProps = {
    postTweet: (e:React.FormEvent<HTMLFormElement> ) => void,
}

const Post = ({postTweet}:PostProps) => {
    const [message, setMessage] = useState("");

    const handleMessage = ({target, currentTarget}:React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = currentTarget.value;
        if(message.length > 249) {
            if(value.length > message.length) return ;
        }
        setMessage(value);
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        postTweet(e);
        setMessage("");
    }

    return (
    <form className='tweet_form' onSubmit={handleSubmit}>
        <Textarea
            id="new_message"
            name="new_message"
            placeholder='My thoughts for today are...'
            value={message}
            onChange={handleMessage}
        />
        <div>
            <button type="submit"
                disabled={message.length == 0? true : false}
            >Post</button>
        </div>
    </form>);
}

export default Post;