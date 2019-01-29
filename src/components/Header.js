import React from 'react';
import { Link } from 'react-router-dom';

export const Header = ({ startLogout, ...props }) => (
    <div className="header">
        <div className="container">
            <div className="container__side-by-side">
                <Link className="header__title" to='/dashboard'>
                    <h1>{props.title}</h1>
                </Link>
            </div>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
    </div>
)

Header.defaultProps = {
    title: 'Indecision'
}



export default (Header);