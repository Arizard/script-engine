import React, { Component } from 'react'
import Editor from './Editor'


export default class EditorController extends Component {
    constructor(props) {
        super(props)

        this.documentData
    }
    
    render() {
        return (
            <Editor data={this.documentData} />
        )
    }
}
