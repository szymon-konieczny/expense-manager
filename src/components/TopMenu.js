import * as React from 'react';
import { NavLink } from 'react-router-dom';

const TopMenu = () => (
    <nav>
        <ul>
            <li><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
            <li><NavLink to="/create" activeClassName="is-active">Create expense</NavLink></li>
            <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
        </ul>
    </nav>
);
export default TopMenu;