import React, { Component } from 'react'
import { Tree, Tooltip, Position, Icon, Intent, Classes } from "@blueprintjs/core"

export default class DocumentBrowser extends Component {
    constructor(props){
        super(props)

        this.state = {
            data: props.fileTree,
            nodes: [
                {
                    id: 0,
                    hasCaret: true,
                    icon: 'folder-open',
                    isExpanded: true,
                    label: 'My Documents',
                    childNodes: [
                        {
                            id: 1,
                            icon: "document",
                            label: "BODYBALANCE™ 77",
                        },
                        {
                            id: 2,
                            icon: "document",
                            label: "BODYBALANCE™ 78",
                        },
                        {
                            id: 3,
                            icon: "document",
                            label: "BODYSTEP™ 116",
                        }
                    ]
                }
            ]
        }
    }
    render() {
        console.log(this.state.nodes)
        return (
            <div>
                <div className='row'>
                    <div className='col-12'>
                        <h1>My Documents</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-8'>
                        <Tree contents={this.state.nodes} className={Classes.ELEVATION_0} />
                    </div>
                    <div className='col-4'>
                        <div className='bp3-running-text bp3-text-muted'>
                            <p>
                                These are all your saved scripts. Try clicking on
                                one to open it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
