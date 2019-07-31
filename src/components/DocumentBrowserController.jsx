import React, { Component } from 'react'
import DocumentBrowser from './DocumentBrowser'
import { withRouter } from 'react-router-dom'

import { FakeDirectoryListingRepository } from '../repositories/DirectoryListing'

class DocumentBrowserController extends Component {
    constructor(props) {
        
        super(props)

        const repo = new FakeDirectoryListingRepository('fake_token')
        
        var dirList = repo.get()
        
        dirList.forEach( (value, index) => {
            var newValue = value
            newValue.icon = 'document'
            newValue.type = 'document'
            dirList[index] = newValue
        })

        this.nodes = [
            {
                id: 0,
                hasCaret: true,
                icon: 'folder-open',
                isExpanded: true,
                label: 'My Documents',
                childNodes: dirList,
            }
        ]

        this.state = {
            selectedNode: this.nodes[0].childNodes[0],
        }
        
        this.handleNodeClick = this.handleNodeClick.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
    }
    handleNodeClick(node){
        this.setState((state) => {
            var newState = state
            newState.selectedNode = node
            return newState
        })
    }
    handleOpen(node){
        this.props.history.push('edit/'+node.uuid)
    }
    render() {
        return (
            <div>
                <DocumentBrowser
                    onNodeClick={this.handleNodeClick}
                    onOpen={this.handleOpen}
                    selectedNode={this.state.selectedNode}
                    contents={this.nodes} />
            </div>
        )
    }
}

export default withRouter(DocumentBrowserController)
