import React, { Component } from 'react'
import { Callout } from '@blueprintjs/core'
import './Container.css'

export default class Container extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-8'>
                        <Callout intent='warning' title='Prototype'>
                            Please be aware that this a non-functional Prototype
                            intended to demonstrate how this platform might appear to
                            a user. Not much will actually work and there probably
                            isn't a back end.
                        </Callout>
                    </div>
                    <div className='col-2'></div>
                </div>
                {this.props.children}
            </div>
        )
    }
}
