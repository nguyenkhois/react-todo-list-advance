import React from 'react';
import { Link } from 'react-router-dom';

const TopMenuHome = () => (
    <div className="top-menu-right">
        <Link to="/deleted">Deleted tasks</Link>
    </div>
)

const TopMenuDeletedTasks = () => (
    <div className="top-menu-left">
        <Link to="/">Back to home</Link>
    </div>
)

export const Menu = ({matchPath}) => (
    <div>
        { matchPath === '/' ? <TopMenuHome /> : <TopMenuDeletedTasks /> }
    </div>
);