import React, { Component } from 'react'
import { Tag } from '@blueprintjs/core'
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
        var icon, intent;
        switch (this.props.status) {
            case 'opening':
                icon = IconNames.TICK_CIRCLE
                intent = 'primary'
                break
            case 'opened':
                icon = IconNames.TICK_CIRCLE
                intent = 'primary'
                break
            case 'saving':
                icon = IconNames.CIRCLE_ARROW_UP
                intent = 'warning'
                break
            case 'saved':
                icon = IconNames.SAVED
                intent = 'success'
                break
            case 'error':
                icon = IconNames.ERROR
                intent = 'danger'
                break
            default:
                icon = IconNames.ASTERISK
                intent = 'warning'
                break
        }

        return (
            <Tag
                className='document-status'
                intent={intent}
                icon={icon}
                minimal={true} 
                large={true} >
                {this.props.status} 
            </Tag>
        )
    }
}
