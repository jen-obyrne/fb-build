import React, { Component } from 'react';
import NavItem from './NavItem';
import './css/Header.css';

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <ul>
                    <NavItem page="Home" hasChildren={false} />
                    <NavItem page="Projects" hasChildren={true} children={["Residential", "Commericial", "Remote", "Rural"]} />
                    <NavItem page="Testimonials"  hasChildren={false} />
                    <NavItem page="About us"  hasChildren={false} />
                </ul>
            </div>
        );
  }
}

export default Navbar;