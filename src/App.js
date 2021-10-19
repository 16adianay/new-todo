import React, {useEffect, useState} from "react";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import css from './App.module.css'
import Header from "./components/header/Header";
import mock from './mock'

function App() {
    const [user, setUser] = useState(mock);
    const {activeUserId, users, todos} = user;
    const isLogged = activeUserId !== null;
    const loggedUser = users.find(user => user.id === activeUserId);

    return (
        <div className={css.app}>
              <Header activeUserId={activeUserId} user={user} setUser={setUser} isLogged={isLogged}/>
              <Main loggedUser={loggedUser} isLogged={isLogged} todos={todos}/>
              <Footer/>
        </div>
  );
}

export default App;
