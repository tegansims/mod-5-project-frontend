import React, {Component} from 'react';

class Games extends React.Component {

    componentDidMount () {
        if (!this.props.username) {
            this.props.history.push('/login')
        }
    }
    
    render(){
        return <div>
            Games page
            </div>
    }

}

export default Games;