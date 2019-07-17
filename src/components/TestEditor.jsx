import React, { Component } from 'react'
import Document from './Document'


export default class TestEditor extends Component {
    constructor(props) {
        super(props)

        this.documentData = [
            {
                type: 'h1',
                text: 'Track 1',
                uuid: 'fake-uuid',
            },
            {
                type: 'script-row-form',
                cts: '',
                moveName: '',
                moveOutcome: '',
                relevantCues: '',
                uuid: 'fake-uuid-2',
            },
        ]
    }
    
    render() {
        return (
            <Document data={this.documentData} />
        )
    }
}
