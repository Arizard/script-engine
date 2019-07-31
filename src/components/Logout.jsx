import React, { Component } from 'react'
import { Button } from '@blueprintjs/core'
import fire from '../config/Fire'

export default class Logout extends Component {
    handleLogout = () => {
        fire.auth().signOut().then(function() {
        }).catch(function(error) {
            console.log('An error occured while signing out.')
        });
    }
    render() {
        return (
            <>
                <Button onClick={this.handleLogout} text='Log Out' className='bp3-minimal' />
            </>
        )
    }
}
