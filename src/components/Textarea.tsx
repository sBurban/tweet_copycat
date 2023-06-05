import { useState } from "react";
import '../App.css'

interface TextareaElem {
    id?: string,
    name?: string,
    placeholder?: string,
    value?: string,
    onChange?: (e:React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea = ({id, name, placeholder, value="", onChange}:TextareaElem) => {

    return <>
        <div className='form_group form_group_textarea'>
            <textarea
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            ></textarea>
            <p>{250 - value.length}</p>
        </div>
    </>
}

export default Textarea;