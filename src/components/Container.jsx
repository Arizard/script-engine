import React, { Component } from 'react'
import { Classes } from '@blueprintjs/core'
import './Container.css'

export default class Container extends Component {
    render() {
        return (
            <div className={'container '+Classes.ELEVATION_1}>
                {this.props.children}
            </div>
        )
    }
}
