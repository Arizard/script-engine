import React, { Component } from 'react'
import { Classes } from '@blueprintjs/core'
import './Container.css'

export default class Container extends Component {
    render() {
        return (
            <div className='container'>
                {this.props.children}
            </div>
        )
    }
}
