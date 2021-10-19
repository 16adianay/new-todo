import React, {useEffect, useState} from 'react';
import css from './Main.module.scss'
import EmptyState from "../empty-state/EmptyState";
import List from "../list/List";
import Button from "@mui/material/Button";
import AddListForm from "../form/AddListForm";

const Main = (props) => {
    const {loggedUser, todos, isLogged} = props;
    let [newTodos, setTodos] = useState(todos);
    const [clicked, setClicked] = useState(false);
    let todo = [];

    if (isLogged) {
        todo = newTodos.filter(todo => todo.userId === loggedUser.id);
    }

    function addCard(data) {
        setTodos([...newTodos, {...data, userId:loggedUser.id}]);
        setClicked(false);
    }
    return (
        <main className={css.main}>
            {loggedUser? (
                    <>
                        <h2>Welcome, {loggedUser.name}!</h2>
                        <Button onClick={() => setClicked(!clicked)} className={css.btn} variant="outlined">{clicked? 'Close': 'Add List'}</Button>
                        {clicked && <AddListForm addCard={addCard}/>}
                        <List todos={todo}/>
                    </>
                )
                : <EmptyState/>
            }
        </main>
    );
};

export default Main;