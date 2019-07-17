import React, { Component } from 'react'
import { Navbar, Button, Alignment, Divider } from '@blueprintjs/core'
import { Link } from 'react-router-dom'

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>ScriptEngine</Navbar.Heading>
                    <Navbar.Divider />
                    <Link to='/' style={{ textDecoration: 'none'}}>
                        <Button className="bp3-minimal" icon='home' text='Home'></Button>
                    </Link>
                    <Link to='/editor' style={{ textDecoration: 'none'}}>
                        <Button className="bp3-minimal" icon='document' text='New'></Button>
                    </Link>
                    <Link to='/my-documents' style={{ textDecoration: 'none'}}>
                        <Button className="bp3-minimal" icon='folder-open' text='My Documents'></Button>
                    </Link>
                    <Link to='/about' style={{ textDecoration: 'none'}}>
                        <Button className="bp3-minimal" icon='info-sign' text='About'></Button>
                    </Link>
                    <Divider />
                    <Link to='/test-editor' style={{ textDecoration: 'none'}}>
                        <Button className="bp3-minimal" intent='danger' icon='build' text='Test Editor'></Button>
                    </Link>

                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                <Button className="bp3-minimal" icon='log-in' text='Log In'></Button>
                </Navbar.Group>
            </Navbar>
        )
    }
}


