import { useState } from 'react';
import '../App.css'
import Textarea from './Textarea';
import { TweetMsg } from '../common/Types';

type PostProps = {
    content: TweetMsg,
    handleSubmit: (e:React.FormEvent<HTMLFormElement>) => void,
    handleCancel: (e:React.MouseEvent<HTMLButtonElement>) => void,
    // handleSubmit: (e:React.FormEvent<HTMLFormElement>, tweet:TweetMsg) => void,
}

const Edit = ({content,handleSubmit, handleCancel}:PostProps) => {
    const [message, setMessage] = useState(content.message || "");

    const handleMessage = ({target, currentTarget}:React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = currentTarget.value;
        if(message.length > 249) {
            if(value.length > message.length) return ;
        }
        setMessage(value);
    }

    return (
    <form className='tweet_form edit_form'
        onSubmit={(e:React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
        // onSubmit={(e:React.FormEvent<HTMLFormElement>) => handleSubmit(e, content)}
    >
        <Textarea
            id="edit_message"
            name="edit_message"
            value={message}
            onChange={handleMessage}
        />
        <div>
            <button className="submit_btn" type="submit"
            >Save</button>
            <button className="cancel_btn" type="button"
                onClick={handleCancel}
            >Cancel</button>
        </div>
    </form>);
}

export default Edit;