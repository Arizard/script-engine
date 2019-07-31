import React, { Component } from 'react'
import { Tree, Button, ButtonGroup, Classes } from "@blueprintjs/core"

function EditTools(props) {
    if (props.type == 'document'){
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
            <div>
                <div className='row'>
                    <div className='col-6'>
                        <h1>My Documents</h1>
                    </div>
                    <div className='col-6'>
                        <h1>{this.props.selectedNode["label"]}</h1>
                    </div>
                    
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <Tree
                            onNodeClick={this.handleNodeClick}
                            contents={this.state.nodes}
                            className={Classes.ELEVATION_0} />
                    </div>
                    <div className='col-6'>
                        <div className='bp3-running-text bp3-text-muted'>
                            
                            <p>
                                {this.props.selectedNode.description}
                            </p>

                            <p>
                                <EditTools
                                    type={this.props.selectedNode.type}
                                    onClick={this.handleOpen(this.props.selectedNode)} />
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
