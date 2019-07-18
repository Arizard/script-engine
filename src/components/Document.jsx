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

    }

    insertHeaderAfter(_uuid){
        return () => {
            this.setState((state) => {
                var index
                const newRow = {
                    type: 'h1',
                    text: 'New Header',
                    uuid: uuid.v4(),
                }
                state.data.forEach((row, i) => {
                    if (row.uuid === _uuid){
                        index = i 
                    }
                })
                if (index === state.data.length - 1){
                    state.data.push(newRow)
                }
                else {
                    state.data.splice(index + 1, 0, newRow)
                }
                
                return state
            })
        }
    }
    insertScriptRowAfter(_uuid){
        return () => {
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
                    if (row.uuid === _uuid){
                        index = i 
                    }
                })
                if (index === state.data.length - 1){
                    state.data.push(newRow)
                }
                else {
                    state.data.splice(index + 1, 0, newRow)
                }
                
                return state
            })
        }
    }
    deleteRow(_uuid){
        return () => {
            this.setState((state) => {
                var filtered = state.data.filter((value) => {
                    return value.uuid !== _uuid
                })
                var newState = state
                newState.data = filtered
                return newState
            })
        }
    }
    confirmChange(_uuid){
        return (newData) => {
            this.setState((state) => {
                state.data.forEach((row, i) => {
                    if (row.uuid === _uuid){
                        state.data[i] = newData
                    }
                })
                return state
            })
            if (this.props.onDocumentUpdate){
                this.props.onDocumentUpdate(this.state.data)
            }
        }
    }
    moveBy(_uuid, n){
        return () => {
            var s
            this.state.data.forEach((row, i) => {
                if (row.uuid === _uuid){
                    s = i
                }
            })
            var d = s + n
            if (d < 0){
                d = 0
            }
            if (d >= this.state.data.length){
                d = this.state.data.length-1
            }
            console.log(d + ' ' + s)
            if (d == s){
                return
            }
            var dir = 1
            if (n < 0){
                dir = -1
            }
            this.setState((state) => {
                while (s !== d){
                    var e1 = state.data[s]
                    var e2 = state.data[s+dir]
                    state.data[s] = e2
                    state.data[s+dir] = e1
                    s = s+dir
                }
                return state
            })
        }
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
                            
                            onConfirmChange={this.confirmChange(row.uuid)}
                            onInsertHeaderAfter={this.insertHeaderAfter(row.uuid)}
                            onInsertScriptRowAfter={this.insertScriptRowAfter(row.uuid)}
                            onMoveDown={this.moveBy(row.uuid, 1)}
                            onMoveUp={this.moveBy(row.uuid, -1)}
                            onDeleteRow={this.deleteRow(row.uuid)}
                            
                            text={row.text} />
                    )
                case 'script-row-form':
                    return (
                        <ScriptRowForm
                            key={row.uuid}
                            uuid={row.uuid}
                            
                            onConfirmChange={this.confirmChange(row.uuid)}
                            onInsertHeaderAfter={this.insertHeaderAfter(row.uuid)}
                            onInsertScriptRowAfter={this.insertScriptRowAfter(row.uuid)}
                            onMoveDown={this.moveBy(row.uuid, 1)}
                            onMoveUp={this.moveBy(row.uuid, -1)}
                            onDeleteRow={this.deleteRow(row.uuid)}

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
