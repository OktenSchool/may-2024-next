import React from 'react';
import NavLinkComponent from '../nav-link/NavLinkComponent';

const Menu = () => {


    return (
        <div>
            <ul>
                <li>
                    <NavLinkComponent path={'/users'}>users</NavLinkComponent>

                </li>
                <li>
                    <NavLinkComponent path={'/posts'}>posts</NavLinkComponent>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
