import React, { Component } from 'react'
import Document from './Document'
import DocumentStatus from './DocumentStatus'
import Toolbar from './Toolbar';

export default class Editor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            documentData: [],
            documentStatus: 'opening',
        }
    }

    componentDidMount() {
        this.repo = this.props.documentRepository
        this.documentData = this.repo.get(
            this.props.match.params.uuid,
            (data) => {
                this.setState({
                    loaded: true,
                    documentStatus: 'opened',
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
        this.setState({
            documentStatus: 'saving',
        })
        this.repo.update(
            this.props.match.params.uuid,
            freshDocumentData,
            (resStatus) => {
                if (resStatus == 200){
                    this.setState({
                        documentStatus: 'saved',
                    })
                }
                else {
                    this.setState({
                        documentStatus: 'error',
                    })
                }
            }
        )
    }
    
    render() {
        if (this.state.loaded){
            return (<div>
                <Document
                    data={this.state.documentData}
                    onDocumentUpdate={this.handleSaveChanges}/>
                <DocumentStatus
                    status={this.state.documentStatus} />
                <Toolbar
                    />
            </div>)
        } else {
            return (<div></div>)
        }
    }
}
