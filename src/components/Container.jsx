import React, { Component } from 'react'
import { Classes } from '@blueprintjs/core'
import './Container.css'

export default class Container extends Component {
    render() {
        return (
<<<<<<< Updated upstream
            <div className='container'>
                <div className='row'>
=======
            <div className={'container '+Classes.ELEVATION_1}>
                {/* <div className='row'>
>>>>>>> Stashed changes
                    <div className='col-12'>
                        <Callout intent='warning' title='Prototype'>
                            Please be careful! The service may be unreliable, so 
                            please check the bottom left hand corner of the editor 
                            to make sure your changes were saved!
                        </Callout>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}
