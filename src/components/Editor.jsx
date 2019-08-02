import React, { Component } from 'react'
import Document from './Document'

export default class Editor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            documentData: [],
        }
    }

    componentDidMount() {
        this.repo = this.props.documentRepository
        this.documentData = this.repo.get(
            this.props.match.params.uuid,
            (data) => {
                this.setState({
                    loaded: true,
                    documentData: data,
                })
            })
    }

    handleSaveChanges = (documentData) => {
        // find the first title row and set the title
        var freshDocumentData = documentData
        for (var i = 0; i < documentData.data.length; i++) {
            var row = documentData.data[i]
            if (row.type === "title") {
                freshDocumentData.title = row.text
                break
            }
        }
        console.log(freshDocumentData)
        this.repo.update(
            this.props.match.params.uuid,
            freshDocumentData,
        )
    }
    
    render() {
        if (this.state.loaded){
            return (
                <Document
                    data={this.state.documentData}
                    onDocumentUpdate={this.handleSaveChanges}/>
            )
        } else {
            return (<div></div>)
        }
    }
}
