import React, { memo } from 'react';
import './Header.scss';

const Header = memo(() => {
    return (
        <div className="header">
            <img src="https://i.ibb.co/GM4sF6w/online-logo-2.jpg" alt=""  />
            <nav>
                <a href="/school">School</a>
                <a href="/review">Order review</a>
                <a href="/manage">Manage inventory</a>
                <a href="/login">Login</a>
            </nav>
        </div>
     
    );
});

export default Header;