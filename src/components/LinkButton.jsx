import React, { Component } from 'react'
import { Button } from '@blueprintjs/core'
import { withRouter } from 'react-router-dom'

class LinkButton extends Component {
    constructor(props){
        super(props)
        this.toLink = this.toLink.bind(this)
        const { staticContext, ...rest } = this.props
        this.childProps = rest
    }
    toLink(){
        this.props.history.push(this.props.to)
    }
    render() {
       return (
            <Button {...this.childProps} onClick={this.toLink} />
        )
    }
}

export default withRouter(LinkButton)
