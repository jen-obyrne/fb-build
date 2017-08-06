import React, { Component } from 'react';
import './css/Header.css';

class NavItemChild extends Component {
    render() {
        let children = this.props.children.map(string =>
                <li>{string}</li>
            );

        return (
            <ul>
                {children}
            </ul>
        );
    }
}

export default NavItemChild;