import React, { Component } from 'react'
import './ScriptRowHeader.css'
import { H2, EditableText } from '@blueprintjs/core'
import RowEdit from './RowEdit'

export default class ScriptRowHeader extends Component {
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
            type: 'h1',
            text,
            uuid: this.props.uuid,
        })
    }
    render() {
        return (
            <div className='script-row-header row'>
                <div className='col-11'>
                    <H2>
                        <EditableText
                            value={this.state.text}
                            onChange={this.handleTextChange}
                            onConfirm={this.onConfirm}
                        />
                    </H2>
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
