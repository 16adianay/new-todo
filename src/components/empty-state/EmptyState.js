import React from 'react';

const EmptyState = () => {
    return (
        <>
            <h2>Welcome to ToDo App!</h2>
            <p>This app is used for creating to-do lists.</p>
            <p>You need to <a href='/' onClick={e => e.preventDefault()}>create an account</a> to use this app</p>
        </>
    );
};

export default EmptyState;