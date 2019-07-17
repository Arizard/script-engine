import React, { Component } from 'react'
import { Button } from '@blueprintjs/core'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-12'>
                    <h1>Scripting Engine</h1>
                    <p>
                    <Link to='/editor' style={{ textDecoration: 'none'}}>
                        <Button icon='document' text='New Document'></Button>
                    </Link>
                    <Link to='/browser' style={{ textDecoration: 'none'}}>
                        <Button icon='folder-open' text='Document Browser'></Button>
                    </Link>
                    </p>
                </div>
            </div>
        )
    }
}
