import React, { Component } from 'react'
import { Icon } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import './DocumentStatus.css'

export default class DocumentStatus extends Component {
    constructor(props) {
        super(props)

        this.state = {
            icon: '',
        }
    }
    render() {
        var icon;
        switch (this.props.status) {
            case 'opening':
                icon = IconNames.DOCUMENT_OPEN
                break
            case 'opened':
                icon = IconNames.DOCUMENT_OPEN
                break
            case 'saving':
                icon = IconNames.CIRCLE_ARROW_UP
                break
            case 'saved':
                icon = IconNames.SAVED
                break
            case 'error':
                icon = IconNames.ERROR
                break
        }

        return (
            <div className='document-status'>
                <div className='status-icon'>
                    <Icon icon={icon} iconSize={16} />
                </div>
                <div className='status-text'>
                    {this.props.status}
                </div>
            </div>
        )
    }
}
