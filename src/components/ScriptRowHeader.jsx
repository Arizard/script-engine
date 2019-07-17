import React, { Component } from 'react'
import './ScriptRowHeader.css'
import { H2, EditableText } from '@blueprintjs/core'

export default class ScriptRowHeader extends Component {
    constructor (props) {
        super(props)
        this.state = {
            text: props.text,
        }
        this.handleTextChange = this.handleTextChange.bind(this)
    }

    handleTextChange(value) {
        this.setState((state) => {
            var newState = state
            newState.text = value
            return newState
        })
    }
    render() {
        return (
            <div className='script-row-header row'>
                <div className='col-12'>
                    <H2>
                        <EditableText
                            value={this.state.text}
                            onChange={this.handleTextChange}
                        />
                    </H2>
                </div>
            </div>
        )
    }
}
