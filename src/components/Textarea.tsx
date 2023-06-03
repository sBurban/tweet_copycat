import { useState } from "react";
import '../App.css'

interface TextareaElem {
    id: string,
    name: string,
    placeholder?: string,
    initValue?: string,
    propsFunction?: (text:string) => void,
}

const Textarea = ({id, name, placeholder, initValue="", propsFunction}:TextareaElem) => {
    const [message, setMessage] = useState(initValue);

    const handleMessage = ({target, currentTarget}:React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = currentTarget.value;
        if(message.length > 249) {
            if(value.length > message.length) return ;
        }
        setMessage(value);
        if(propsFunction) propsFunction(value);
    }

    return <>
        <div className='form_group form_group_textarea'>
            <textarea
                id={id}
                name={name}
                placeholder={placeholder}
                value={message}
                onChange={handleMessage}
            ></textarea>
            <p>{250 - message.length}</p>
        </div>
    </>
}

export default Textarea;