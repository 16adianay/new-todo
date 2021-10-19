import React, {useRef} from 'react';
import css from './AddListForm.module.scss'
import {Button} from "@mui/material";
import nextId from "react-id-generator";

const AddListForm = ({addCard}) => {
    const titleInput = useRef();
    const itemsInput = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidated = isFormValidated();
        if (isValidated) {
            const items = itemsInput.current.value.split(',').map(item => {
                return {
                    id: nextId(),
                    content: item.trim(),
                    completed: false
                }
            })
            addCard ({
                title:titleInput.current.value,
                items,
            })
        }
    }

    function isFormValidated() {
        return titleInput.current.value !== '' && itemsInput.current.value !== '';
    }

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.label} htmlFor='cardsTitle'>Card Title</label>
            <input ref={titleInput} type='text' id='cardsTitle' placeholder='Enter card title...' required={true}/>
            <label className={css.label} htmlFor='cards'>Enter list items separated by comma</label>
            <textarea ref={itemsInput} id='cards' required={true}/>
            <Button className={css.btn} type='submit'>Add</Button>
        </form>
    );
};

export default AddListForm;