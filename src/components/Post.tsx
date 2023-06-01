import { useState } from 'react';
import '../App.css'
import Textarea from './Textarea';

type PostProps = {
    handleSubmit: (e:React.FormEvent<HTMLFormElement> ) => void,
}

const Post = ({handleSubmit}:PostProps) => {
    const [message, setMessage] = useState("");

    // const handleMessage = ({target, currentTarget}:React.ChangeEvent<HTMLTextAreaElement>) => {
    //     const value = currentTarget.value;
    //     if(message.length > 249) {
    //         if(value.length > message.length) return ;
    //     }
    //     setMessage(value);
    // }

    const getTextValue = (text:string) => {
        setMessage(text);
    }

    return (
    <form className='tweet_form' onSubmit={handleSubmit}>
        <Textarea
            id="new_message"
            name="new_message"
            placeholder='My thoughts for today are...'
            // initValue={message}
            // onChange={handleMessage}
            propsFunction={getTextValue}
        />
        {/* <div className='form_group form_group_textarea'>
            <textarea
                id="new_message"
                name="new_message"
                placeholder='My thoughts for today are...'
                value={message}
                onChange={handleMessage}
            ></textarea>
            <p>{250 - message.length}</p>
        </div> */}
        <div>
            <button type="submit"
                disabled={message.length == 0? true : false}
            >Post</button>
        </div>
    </form>);
}

export default Post;