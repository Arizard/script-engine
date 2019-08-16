import React, { Component } from 'react'
import { Button, Tooltip, Drawer } from '@blueprintjs/core'
import './ScriptAssist.css'

export default class ScriptAssist extends Component {

    handleOnClick = () => {

    }
    render() {
        return (
            <Tooltip
                content='Handy notes on coaching and scripting for your class.'>
                <Button
                    intent='primary'
                    className='script-assist'
                    icon="lifesaver"
                    text="Assist" />
            </Tooltip>
        )
    }
}
