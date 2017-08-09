import React, { Component } from 'react';
import './css/Header.css';

class NavItemChild extends Component {
    render() {
        if (this.props.hideChildren === true) {
            return null;
        }
        let children = this.props.children.map(child =>
                <li key={child.id}>{child.name}</li>
            );

        return (
            <ul>
                {children}
            </ul> 
        );
    }
}

export default NavItemChild;