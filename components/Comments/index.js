import React from 'react'
import Octomments from 'octomments'

class Comments extends React.Component {
    componentDidMount () {
        const octomments = Octomments({
            github: {
                owner: 'Vincenius',
                repo: 'wwebdev',
            },
            issueNumber: this.props.issueNumber,
            renderer: [(api, container) => {
                console.log(container)
            }, '#comments']
        })

        octomments.init()
    }

    render() {
        return <div id="comments"></div>
    }
}

export default Comments
