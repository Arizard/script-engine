import React, { Component } from 'react'
import './ScriptRowSimple.css'
import { H2, EditableText } from '@blueprintjs/core'
import RowEdit from './RowEdit'

export default class ScriptRowSimple extends Component {
    constructor (props) {
        super(props)
        this.state = {
            text: props.text,
        }
        this.handleTextChange = this.handleTextChange.bind(this)
        this.onConfirm = this.onConfirm.bind(this)
    }

    handleTextChange(value) {
        this.setState((state) => {
            var newState = state
            newState.text = value
            return newState
        })
    }

    onConfirm(){
        var { text } = this.state
        this.props.onConfirmChange({
            type: 'script-row-simple',
            text,
            uuid: this.props.uuid,
        })
    }
    render() {
        const isFocused = this.props.nextFocusUUID === this.props.uuid ? true : false
        return (
            <div className='script-row-simple row bp3-running-text'>
                <div className='col-11'>
                    <EditableText
                        value={this.state.text}
                        onChange={this.handleTextChange}
                        onConfirm={this.onConfirm}
                        placeholder={this.props.placeholder}
                        isEditing={isFocused}
                        selectAllOnFocus={isFocused}
                        multiline={true}
                        minLines={3}
                    />
                </div>
                <div className='col-1'>
                    <RowEdit
                        {...this.props}
                    />
                </div>
            </div>
        )
    }
}
