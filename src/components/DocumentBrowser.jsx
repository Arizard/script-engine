import React, { Component } from 'react'
import { Tree, Button, ButtonGroup, Classes } from "@blueprintjs/core"

function EditTools(props) {
    if (props.type === 'document'){
        return (
            <ButtonGroup>
                <Button
                    onClick={props.onClick}
                    text='Open'
                    icon='document-open'/>
                <Button text='Delete' disabled={true} icon='trash'/>
            </ButtonGroup>
        )
    }
    else {
        return (<span></span>)
    }
}

export default class DocumentBrowser extends Component {
    constructor(props){
        super(props)

        this.state = {
            data: props.fileTree,
            nodes: props.contents,
        }
        this.handleNodeClick = this.handleNodeClick.bind(this)
    }
    handleNodeClick(nodeData, nodePath, e){
        this.props.onNodeClick(nodeData)
    }
    handleOpen(node){
        return (() => {
            this.props.onOpen(node)
        })
    }
    render() {
        console.log(this.state.nodes)
        return (
            <div className={'row ' + this.props.className}>
                <div className='col-6'>
                    <h1>My Documents</h1>
                    <div>
                        <Tree
                            onNodeClick={this.handleNodeClick}
                            contents={this.state.nodes}
                            className={Classes.ELEVATION_0} />
                        &nbsp;
                        <p>
                            <Button intent='primary' text='New Document' onClick={this.props.onNewDocument} />
                        </p>
                    </div>
                    
                    
                </div>
                <div className='col-6'>
                    <div>
                        <h1>{this.props.selectedNode ? this.props.selectedNode["label"] : ('')}</h1>
                    </div>
                    <div>
                        <div className='bp3-running-text bp3-text-muted'>
                            
                            <p>
                                {this.props.selectedNode ? this.props.selectedNode.description : ('Select a document.')}
                            </p>

                            {this.props.selectedNode ? (<EditTools
                                type={this.props.selectedNode.type}
                                onClick={this.handleOpen(this.props.selectedNode)} />) : ('')}
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
