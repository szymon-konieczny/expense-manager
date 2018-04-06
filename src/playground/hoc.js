// Higher order Component (HOC) - A component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info} </p>
    </div>
);
const AuthUser = () => (
    <div>
        <h2>You are an authenticated user. Enjoy it!</h2>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please don't share!</p> }
            <WrappedComponent { ...props } />
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? (<WrappedComponent { ...props } />) : (<p>Please log in to access this content</p>) }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(AuthUser);

// ReactDOM.render(<AdminInfo isAdmin={ true } info="Hello world!" />, document.querySelector('#app'));
ReactDOM.render(<AuthInfo isAuthenticated={ false } />, document.querySelector('#app'));