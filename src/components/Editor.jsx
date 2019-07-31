import React, { Component } from 'react'
import Document from './Document'
import { FakeDocumentRepository } from '../repositories/Document'


export default class Editor extends Component {
    constructor(props) {
        super(props)
        const repo = new FakeDocumentRepository('fake_token')
        console.log(this.props.match.params.uuid)
        this.documentData = repo.get(this.props.match.params.uuid)
    }
    
    render() {
        return (
            <Document data={this.documentData} />
        )
    }
}
