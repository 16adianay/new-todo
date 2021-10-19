import React from 'react';
import css from "./Header.module.scss";

const User = ({user, setUser, value, name}) => {
    const setActiveUser = () => {
        const updateId = {...user, activeUserId: value}
        setUser(updateId);
    }
    return (
        <div className={css.header__select__item} onClick={setActiveUser}>{name}</div>
    );
};

export default User;