import React, { Component } from 'react';
import NavItem from './NavItem';
import './css/Header.css';

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <ul>
                    <NavItem page="Home" hasChildren={false} />
                    <NavItem page="Projects" 
                        hasChildren={true} 
                        children={[
                            {name:"Residential", id:1}, 
                            {name:"Commericial", id:2}, 
                            {name:"Remote", id:3}, 
                            {name:"Rural", id:4}]} />
                    <NavItem page="Testimonials"  hasChildren={false} />
                    <NavItem page="About us"  hasChildren={false} />
                </ul>
            </div>
        );
  }
}

export default Navbar;