import React, { Component } from 'react'
import { Tag } from '@blueprintjs/core'

export default class About extends Component {
    componentDidMount() {
        document.title = 'About | ScriptEngine'
    }
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
                    <p><a href="http://brain.less.coffee/posts/scriptengine-01/">Read more here.</a></p>
                    <h2>Legend</h2>
                    <ul>
                        <li><Tag className='background-layer-1'>Layer 1</Tag></li>
                        <li><Tag className='background-layer-2'>Layer 2</Tag></li>
                        <li><Tag className='background-layer-3'>Layer 3</Tag></li>
                    </ul>
                </div>
            </div>
        )
    }
}
