import React, { Component } from 'react';
import NavItemChild from './NavItemChild';
import './css/Header.css';

class NavItem extends Component {
    constructor(props) {
        super(props)
        this.state ={
            collapsed:true
        // Set your state here
        }
    }

    componentDidMount() {
        this.setState({collapsed: true});
    }

    render() {
        function toggleNavItemChildren(navItem) {
            if (navItem.state.collapsed === true) {
                navItem.setState({collapsed: false});
            } else {
                navItem.setState({collapsed: true});
            }
        }

        if (this.props.hasChildren) {
            return (
                <li onClick={() => toggleNavItemChildren(this)}>                 
                    {this.props.page}
                    <NavItemChild hideChildren={this.state.collapsed} children={this.props.children}/>
                </li>
             );
        } else {
            return (
                <li>{this.props.page}</li>
            );
        }
    }
}



export default NavItem;