import React, { Component } from 'react'
import { ButtonGroup, Button, Tooltip } from '@blueprintjs/core'
import "./Toolbar.css"
import ScriptAssist from './ScriptAssist';

export default class Toolbar extends Component {
    render() {
        return (
            <div className='document-toolbar'>
                {/* <ButtonGroup>
                    <Tooltip content='Document Tools'>
                        <Button text='Menu' icon='menu'></Button>
                    </Tooltip>
                    <ScriptAssist />
                </ButtonGroup> */}
            </div>
        )
    }
}
