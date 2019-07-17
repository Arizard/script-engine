import React, { Component } from 'react'
import ScriptRowForm from './ScriptRowForm'
import ScriptRowHeader from './ScriptRowHeader'
// import ButtonAddRow from './ButtonAddRow'
import uuid from 'uuid'

export default class Document extends Component {
    constructor(props) {
        super(props)

        this.numChanges = 0

        this.state = {
            data: this.props.data,
        }

        this.handleConfirmedChange = this.handleConfirmedChange.bind(this)
        this.handleScriptRowInsertAfter = this.handleScriptRowInsertAfter.bind(this)
    }
    handleConfirmedChange(i, newData){
        this.setState((state) => {
            state.data[i] = newData
            return state
        })
        console.log(this.state)
        return
    }
    handleScriptRowInsertAfter(_uuid){
        this.setState((state) => {
            var index
            const newRow = {
                type: 'script-row-form',
                cts: '',
                moveName: '',
                moveOutcome: '',
                relevantCues: '',
                uuid: uuid.v4(),
            }
            state.data.forEach((row, i) => {
                if (row.uuid == _uuid){
                    index = i 
                }
            })
            if (index == state.data.length - 1){
                state.data.push(newRow)
            }
            else {
                state.data.splice(index + 1, 0, newRow)
            }
            
            return state
        })
        
        return
    }
    render() {
        console.log(this.state)
        const docRows = this.state.data.map((row) => {
            switch (row.type){
                case 'h1':
                    return (
                        <ScriptRowHeader
                            key={row.uuid}
                            uuid={row.uuid}
                            handleConfirmedChange={this.handleConfirmedChange}
                            text={row.text} />
                    )
                case 'script-row-form':
                    return (
                        <ScriptRowForm
                            key={row.uuid}
                            uuid={row.uuid}
                            handleConfirmedChange={this.handleConfirmedChange}
                            handleScriptRowInsertAfter={this.handleScriptRowInsertAfter}
                            cts={row.cts}
                            moveName={row.moveName}
                            moveOutcome={row.moveOutcome}
                            relevantCues={row.relevantCues} />
                        )
                default:
                    return (
                        <p>Error rendering component.</p>
                    )
            }
        })
        return (
            <div>
                {docRows}
            </div>
        )
    }
}
