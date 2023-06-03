import { useState } from 'react';
import '../App.css'
import Textarea from './Textarea';

type PostProps = {
    postTweet: (e:React.FormEvent<HTMLFormElement> ) => void,
}

const Post = ({postTweet}:PostProps) => {
    const [message, setMessage] = useState("");

    const getTextValue = (text:string) => {
        setMessage(text);
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
            // initValue={message}
            propsFunction={getTextValue}
        />
        <div>
            <button type="submit"
                disabled={message.length == 0? true : false}
            >Post</button>
        </div>
    </form>);
}

export default Post;