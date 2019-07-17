import React, { Component } from 'react'
import { Button } from '@blueprintjs/core'

export default class About extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-12'>
                    <h1>About</h1>
                    <p>
                        I made this website to experiment with React and learn
                        how it works.
                    </p>
                    <p>
                        I like it so far, especially when using a framework
                        such as <code>blueprint</code>. I can easily add UI 
                        elements like buttons with icons:
                    </p>
                    <p style={{ textAlign: 'center' }}>
                        <Button icon='cog' text='Settings' />&nbsp;
                        <Button icon='build' text='Build' />&nbsp;
                        <Button icon='info-sign' text='Help' />&nbsp;  
                    </p>
                    <p>
                        Neat!
                    </p>
                </div>
            </div>
        )
    }
}
