import React, { Component } from 'react'
import { EditableText } from '@blueprintjs/core'
import './ScriptRowForm.css'
import RowEdit from './RowEdit'

export default class ScriptRowForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            cts: props.cts,
            moveName: props.moveName,
            moveOutcome: props.moveOutcome,
            relevantCues: props.relevantCues,
        }
        this.handleCtsChange = this.handleCtsChange.bind(this)
        this.handleMoveNameChange = this.handleMoveNameChange.bind(this)
        this.handleMoveOutcomeChange = this.handleMoveOutcomeChange.bind(this)
        this.handleRelevantCuesChange = this.handleRelevantCuesChange.bind(this)
        this.handleConfirmChange = this.handleConfirmChange.bind(this)
    }
    handleConfirmChange(){
        var { cts, moveName, moveOutcome, relevantCues } = this.state
        this.props.onConfirmChange({
            type: 'script-row-form',
            cts,
            moveName,
            moveOutcome,
            relevantCues,
            uuid: this.props.uuid,
        })
    }
    
    handleCtsChange(value) {
        this.setState((state) => {
            var newState = state
            newState.cts = value
            return newState
        })
    }
    handleMoveNameChange(value) {
        this.setState((state) => {
            var newState = state
            newState.moveName = value
            return newState
        })
    }
    handleMoveOutcomeChange(value) {
        this.setState((state) => {
            var newState = state
            newState.moveOutcome = value
            return newState
        })
    }
    handleRelevantCuesChange(value) {
        this.setState((state) => {
            var newState = state
            newState.relevantCues = value
            return newState
        })
    }
    
    render() {
        return (
            <div className='script-row-form'>
                <div className='row'>
                    <div className='col-1'>
                        <EditableText 
                            multiline={false}
                            placeholder='0'
                            onChange={this.handleCtsChange}
                            value={this.state.cts}
                            minWidth={0}
                            className='round-background x-padding-4px'
                            onConfirm={this.handleConfirmChange}
                        />
                    </div>
                    <div className='col-2'>
                        <EditableText 
                            placeholder='Name of Move'
                            onChange={this.handleMoveNameChange}
                            value={this.state.moveName}
                            multiline={true}
                            onConfirm={this.handleConfirmChange}
                        />
                    </div>
                    <div className='col-2'>
                        <EditableText 
                            placeholder='Outcome for Move'
                            onChange={this.handleMoveOutcomeChange}
                            value={this.state.moveOutcome}
                            multiline={true}
                            onConfirm={this.handleConfirmChange}
                        />
                    </div>
                    <div className='col-6'>
                        <EditableText 
                            multiline={true}
                            minLines={3}
                            placeholder='Relevant Cues'
                            onChange={this.handleRelevantCuesChange}
                            value={this.state.relevantCues}
                            onConfirm={this.handleConfirmChange}
                        />
                    </div>
                    <div className='col-1'>
                        <RowEdit {...this.props} />
                    </div>
                </div>
            </div>
        )
    }
}
