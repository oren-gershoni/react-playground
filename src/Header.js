import React, {Component} from 'react';


export class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-dark bg-primary">
                    <span className="navbar-brand"  >React Playground</span>
                </nav>
            </header>);
    }
}