import React, { Component } from 'react'
import { ButtonGroup } from '@blueprintjs/core'
import "./Toolbar.css"
import ScriptAssist from './ScriptAssist';

export default class Toolbar extends Component {
    render() {
        return (
            <div className='document-toolbar'>
                <ButtonGroup>
                    <ScriptAssist />
                </ButtonGroup>
            </div>
        )
    }
}
