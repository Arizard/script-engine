import React, { Component } from 'react'
import { Popover, Menu, Button } from '@blueprintjs/core'
import './RowEdit.css'

export default class RowEdit extends Component {
    render() {
        return (<div className='row-edit'>
            <Popover content={
                <Menu>
                    <Menu.Divider title='Insert' />
                    <Menu.Item text='Insert header after' icon='header-one' onClick={this.props.onInsertHeaderAfter} />
                    <Menu.Item text='Insert script row after' icon='insert' onClick={this.props.onInsertScriptRowAfter} />
                    <Menu.Item text='Insert paragraph after' icon='paragraph' onClick={this.props.onInsertSimple} />
                    <Menu.Item text='Duplicate row' icon='duplicate' onClick={this.props.onDuplicateRow} />
                    <Menu.Divider title='Arrange' />
                    <Menu.Item text='Move up' icon='chevron-up' onClick={this.props.onMoveUp} />
                    <Menu.Item text='Move down' icon='chevron-down' onClick={this.props.onMoveDown} />
                    <Menu.Divider title='Remove'/>
                    <Menu.Item text='Delete' intent='danger' icon='delete' onClick={this.props.onDeleteRow} />
                </Menu>
            }>
                <Button icon='more' className='bp3-minimal' />
            </Popover>
        </div>)
    }
}
