import { useState } from 'react';
import '../App.css'
import Textarea from './Textarea';
import { TweetMsg,TweetEventProps } from '../common/Types';

type PostProps = {
    content: TweetMsg,
    handleSubmit: (e:React.FormEvent<HTMLFormElement>) => void,
    handleCancel: (e:React.MouseEvent<HTMLButtonElement>) => void,
    // handleSubmit: (e:React.FormEvent<HTMLFormElement>, tweet:TweetMsg) => void,
}

const Edit = ({content,handleSubmit, handleCancel}:PostProps) => {
    const [message, setMessage] = useState("");

    return (
    <form className='tweet_form'
        onSubmit={(e:React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
        // onSubmit={(e:React.FormEvent<HTMLFormElement>) => handleSubmit(e, content)}
    >
        <Textarea
            id="edit_message"
            name="edit_message"
            initValue={content.message}
        />
        <div>
            <button type="submit"
            >Save</button>
            <button type="button"
                onClick={handleCancel}
            >Cancel</button>
        </div>
    </form>);
}

export default Edit;