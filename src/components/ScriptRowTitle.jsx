import React, { Component } from 'react'
import './ScriptRowTitle.css'
import { H1, EditableText } from '@blueprintjs/core'

export default class ScriptRowTitle extends Component {
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
            type: 'title',
            text,
            uuid: this.props.uuid,
        })
    }
    render() {
        return (
            <div className='script-row-title row'>
                <div className='col-11 bp3-text-muted'>
                    <H1>
                        <EditableText
                            value={this.state.text}
                            onChange={this.handleTextChange}
                            onConfirm={this.onConfirm}
                            placeholder={this.props.placeholder}
                        />
                    </H1>
                    <hr></hr>
                </div>
                <div className='col-1'>
                </div>
            </div>
        )
    }
}
