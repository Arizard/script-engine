import React, { Component } from 'react'
import { EditableText, Button, Popover, Menu, MenuItem, Divider } from '@blueprintjs/core'
import './ScriptRowForm.css'

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
        this.confirmChange = this.confirmChange.bind(this)
        this.handleInsertAfter = this.handleInsertAfter.bind(this)
    }
    confirmChange(){
        var { cts, moveName, moveOutcome, relevantCues } = this.state
        this.props.handleConfirmedChange(this.props.index, {
            type: 'script-row-form',
            cts,
            moveName,
            moveOutcome,
            relevantCues,
        })
    }
    handleInsertAfter(){
        this.props.handleScriptRowInsertAfter(this.props.uuid)
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
                            onConfirm={this.confirmChange}
                        />
                    </div>
                    <div className='col-2'>
                        <EditableText 
                            placeholder='Name of Move'
                            onChange={this.handleMoveNameChange}
                            value={this.state.moveName}
                            multiline={true}
                            onConfirm={this.confirmChange}
                        />
                    </div>
                    <div className='col-2'>
                        <EditableText 
                            placeholder='Outcome for Move'
                            onChange={this.handleMoveOutcomeChange}
                            value={this.state.moveOutcome}
                            multiline={true}
                            onConfirm={this.confirmChange}
                        />
                    </div>
                    <div className='col-6'>
                        <EditableText 
                            multiline={true}
                            minLines={3}
                            placeholder='Relevant Cues'
                            onChange={this.handleRelevantCuesChange}
                            value={this.state.relevantCues}
                            onConfirm={this.confirmChange}
                        />
                    </div>
                    <div className='col-1'>
                        <Popover content={
                            <Menu>
                                <MenuItem text='Insert row after' icon='insert' onClick={this.handleInsertAfter} />
                                <Divider />
                                <MenuItem text='Delete' intent='danger' icon='delete' onClick={this.handleDelete} />
                            </Menu>
                        }>
                            <Button icon='more' className='bp3-minimal wide' />
                        </Popover>
                    </div>
                </div>
            </div>
        )
    }
}
