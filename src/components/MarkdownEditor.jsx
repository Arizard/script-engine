import React, { Component } from 'react'
import { EditableText } from '@blueprintjs/core'
import marked from 'marked'

export default class MarkdownEditor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            markdownOutput: '',
        }
        this.handleTextEntryChange = this.handleTextEntryChange.bind(this)
    }

    handleTextEntryChange(value) {
        this.setState((state) => {
            return {markdownOutput: marked(value)}
        })
    }

    render() {
        return (
            <div className='row'>
                <div className='col-6'>
                    <EditableText multiline={true}
                                  placeholder='Click to edit markdown...' 
                                  minLines={32}
                                  onChange={this.handleTextEntryChange} />
                </div>
                <div className='col-6'
                     dangerouslySetInnerHTML={{
                        __html: this.state.markdownOutput
                     }}>
                </div>
            </div>
        )
    }
}
