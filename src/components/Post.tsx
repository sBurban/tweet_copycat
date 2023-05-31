import { useState } from 'react';
import '../App.css'

const Post = () => {
    return (
    <form className='tweet_form'>
        <div className='form-group'>
            <textarea id="newtweet" placeholder='My thoughts for today are...'></textarea>
            <p>250</p>
        </div>
        <div>
            <button type="submit" disabled>Post</button>
        </div>
    </form>);
}

export default Post;