import React, { Component } from 'react'
import DocumentBrowser from './DocumentBrowser'
import { withRouter } from 'react-router-dom'

class DocumentBrowserController extends Component {
    constructor(props) {
        
        super(props)

        this.state = ({
            loaded: false,
        })
        
        this.handleNodeClick = this.handleNodeClick.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
    }

    componentDidMount(){
        document.title = 'My Documents | ScriptEngine'
        // const repo = new DirectoryListingRepository(this.props.token)
        const repo = this.props.directoryListingRepository
        repo.get((result) => {
            var dirList = result
            dirList.forEach( (value, index) => {
                var newValue = value
                newValue.icon = 'document'
                newValue.type = 'document'
                newValue.label = value.title
                newValue.description = `Document ${value.title}`
                dirList[index] = newValue
                console.log(newValue.data)
            })
            var nodes = [
                {
                    id: -1,
                    hasCaret: true,
                    icon: 'folder-open',
                    isExpanded: true,
                    label: 'My Documents',
                    childNodes: dirList,
                }
            ]
            this.setState((state) => {
                state.selectedNode = nodes[0].childNodes ? nodes[0].childNodes[0] : null
                state.nodes = nodes
                state.loaded = true
                console.log('State set')
                return state
            })
        })
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
    handleNewDocument = () => {
        const repo = this.props.documentRepository
        repo.create(_uuid => {
            this.props.history.push('edit/'+_uuid)
        })
    }
    render() {
        console.log(this.state.nodes)
        if (this.state.loaded){
            return (
                // I dont know why this needs an empty span but whatever. It won't work without it.
                <div><span></span>
                    <DocumentBrowser
                        onNodeClick={this.handleNodeClick}
                        onOpen={this.handleOpen}
                        selectedNode={this.state.selectedNode}
                        contents={this.state.nodes}
                        onNewDocument={this.handleNewDocument} />
                </div>
            )
        }
        return (
            <DocumentBrowser
                className='bp3-skeleton'
                onNodeClick={this.handleNodeClick}
                onOpen={this.handleOpen}
                // selectedNode={this.state.selectedNode}
                contents={[
                    {
                        id: 0,
                        label: 'Placeholder',
                        icon: 'document'
                    },
                    {
                        id: 1,
                        label: 'Placeholder',
                        icon: 'document'
                    },
                    {
                        id: 2,
                        label: 'Placeholder',
                        icon: 'document'
                    },
                ]} 
                />
        )
    }   
}

export default withRouter(DocumentBrowserController)
