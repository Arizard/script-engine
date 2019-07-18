import React, { Component } from 'react'
// import { Button } from '@blueprintjs/core'

export default class About extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-12'>
                    <h1>About</h1>
                    <p>ScriptEngine is an online tool to help Les Mills 
                        instructors script their tracks. It is an implementation 
                        of the outcome-based scripting model highlighted in 
                        AIM2 training modules.
                    </p>
                </div>
            </div>
        )
    }
}
