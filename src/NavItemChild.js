import React, { Component } from 'react';
import './css/Header.css';

class NavItemChild extends Component {
    render() {
        let children = this.props.children.map(child =>
                <li>{child}</li>
            );

        return (
            <li>
                {this.props.parentPage}
                <ul>
                    {children}
                </ul>
             </li>
        );
    }
}

export default NavItemChild;