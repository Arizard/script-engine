import React, { Component } from 'react'
import { Popover, Menu, Button, Divider, Tooltip } from '@blueprintjs/core'

export default class RowEdit extends Component {
    render() {
        return (
            <Popover content={
                <Menu>
                    <Menu.Item text='Insert header after' icon='header-one' onClick={this.props.onInsertHeaderAfter} />
                    <Menu.Item text='Insert script row after' icon='insert' onClick={this.props.onInsertScriptRowAfter} />
                    <Menu.Item text='Insert paragraph after' icon='paragraph' onClick={this.props.onInsertSimple} />
                    <Menu.Item text='Duplicate row' icon='duplicate' onClick={this.props.onDuplicateRow} />
                    <Menu.Item text='Move up' icon='chevron-up' onClick={this.props.onMoveUp} />
                    <Menu.Item text='Move down' icon='chevron-down' onClick={this.props.onMoveDown} />
                    <Divider />
                    <Menu.Item text='Delete' intent='danger' icon='delete' onClick={this.props.onDeleteRow} />
                </Menu>
            }>
                <Tooltip content='Row Tools'>
                    <Button icon='more' className='bp3-minimal row-edit' />
                </Tooltip>
            </Popover>
        )
    }
}
