import React, { Component } from 'react'
import { Navbar, ButtonGroup, Alignment } from '@blueprintjs/core'
// import { Link, withRouter } from 'react-router-dom'
import LinkButton from './LinkButton'

export default class CustomNavbar extends Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            desktop: true,
            isOpen: false,
        }
        this.toggleNav = this.toggleNav.bind(this)
    }
    toggleNav(){
        this.setState((state) => {
            var newState = state
            newState.isOpen = true
            return newState
        })
    }
    render() {
        if (this.state.desktop){
            return (
                <Navbar>
                    <Navbar.Group align={Alignment.LEFT}>
                        <Navbar.Heading>ScriptEngine</Navbar.Heading>
                        <Navbar.Divider />
                        {/* <ButtonGroup minimal={true}>
                            <LinkButton icon='home' to='/' text='Home'></LinkButton>
                            <LinkButton icon='document' to='/editor' text='New'></LinkButton>
                            <LinkButton icon='folder-open' to='/my-documents' text='My Documents'></LinkButton>
                            <LinkButton icon='info-sign' to='/about' text='About'></LinkButton>
                        </ButtonGroup>
                        <Navbar.Divider /> */}
                        <LinkButton className="bp3-minimal" intent='danger' to='/test-editor' icon='build' text='Test Editor'></LinkButton>
                    </Navbar.Group>
                    {/* <Navbar.Group align={Alignment.RIGHT}>
                        <LinkButton className="bp3-minimal" icon='log-in' text='Log In'></LinkButton>
                    </Navbar.Group> */}
                </Navbar>
            )
        }
    }
}


