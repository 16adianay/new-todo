import React, {useState} from 'react';
import css from './Header.module.scss'
import logo from '../../images/GNOME_Todo_icon_2019.svg';
import User from "./User";

const Header = (props) => {
    const {isLogged, setUser, user} = props;
    const [showing, setShowing] = useState(false);

    const handleClick = () => {
        setShowing(!showing);
    }

    return (
        <header className={css.header}>
            <div className={css.logo}>
                <img src={logo} alt={'logo'}/>
                <h1>ToDo App</h1>
            </div>
            <div className={css.button} onClick={handleClick}>{isLogged? 'Change user' : 'Log In'}
            {showing?
                <div className={css.header__select}>
                    <User user={user} setUser={setUser} value={1} name='Joe Doe'/>
                    <User user={user} setUser={setUser} value={2} name='Diana Gromova'/>
                    <User user={user} setUser={setUser} value={null} name='Unregistered user'/>
                </div>
                : null
            }
            </div>
        </header>
    );
};

export default Header;