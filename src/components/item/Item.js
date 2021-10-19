import React, {useState} from 'react';
import {Checkbox} from "@mui/material";

const Item = ({item}) => {
    const [checked, setChecked] = useState(item.completed);

    const handleChange = () => {
        setChecked(!checked)
    }

    return (
        <li>
            <Checkbox color="success" checked={checked} onChange={handleChange}/>
            {checked ?
                <del>{item.content}</del>
                :<span>{item.content}</span>
            }
        </li>
    );
};

export default Item;