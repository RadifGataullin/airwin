import React from 'react';


export default class Header extends React.Component {
    isRoute = window.location.pathname.includes('/catalog');
    nStyle = this.isRoute ? { height: '200px' } : { height: '500px' };
    sStyle = this.isRoute ? { background: 'black'} : { background: 'green'}
    render() {
        return (
            <header className='header' style={this.sStyle}>
                <nav className='wrapper-header' style={this.nStyle}><ul><li>Home</li></ul></nav>
            </header>
        )
    }
}