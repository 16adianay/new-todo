import React from 'react';
import css from './List.module.scss'
import Item from "../item/Item";

const List = ({todos}) => {
    return (
        <div className={css.cards}>
            {todos.map(todo => {
                return (
                    <div className={css.card}>
                        <h3>{todo.title}</h3>
                        <ul className={css.list}>
                            {todo.items.map(item => {
                               return (
                                    <Item item={item}/>
                                   )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    );
};

export default List;