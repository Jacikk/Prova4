import React, { Component } from 'react'
import './styles.css'

const Dropdown = ({ show }) =>
    <div style={{ visibility: show ? "visible" : "hidden", display: "flex", flexDirection: "column"}} className='MenuDropDown'>
        <Link to='/'>Button</Link>
        <Link to='/'>Button</Link>
        <Link to='/'>Button</Link>
        <Link to='/'>Button</Link>
    </div>

export default class DropDownMenu extends Component {

    state = {
        dropdownVisible: true,
    };

    toggleDropdown = () => this.setState(state => ({
        dropdownVisible: !state.dropdownVisible,
    }));

    render() {
        return (
          <div> 
            <button onClick={this.toggleDropdown}>ClickAqui</button>
            <div style={{ zIndex: this.state.dropdownVisible ? "6" : "-1" }}>
              <Dropdown show={this.state.dropdownVisible} />
            </div>
          </div>
        );
      }

}