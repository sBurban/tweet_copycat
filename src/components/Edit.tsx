import { useState } from 'react';
import '../App.css'
import Textarea from './Textarea';

type PostProps = {
    initValue: string,
    handleSubmit: (e:React.FormEvent<HTMLFormElement> ) => void,
    handleDelete: (e:React.MouseEvent<HTMLButtonElement>) => void,
}

const Edit = ({handleSubmit, handleDelete}:PostProps) => {
    const [message, setMessage] = useState("");

    return (
    <form className='tweet_form' onSubmit={handleSubmit}>
        <Textarea
            id="edit_message"
            name="edit_message"
            initValue={""}
        />
        <div>
            <button type="submit"
            >Save</button>
            <button type="button"
                onClick={handleDelete}
            >Save</button>
        </div>
    </form>);
}

export default Edit;