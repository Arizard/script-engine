import React, { Component } from 'react'
import { Button } from '@blueprintjs/core'
import './ButtonAddRow.css'

export default class ButtonAddRow extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-12'>
                    <Button
                        icon='plus'
                        className='bp3-minimal wide'
                        onClick={this.props.onClick} />
                </div>
            </div>
        )
    }
}
