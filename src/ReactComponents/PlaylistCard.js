import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class PlaylistCard extends Component{
    render(){
        return(
            <Panel style={{margin: '10px'}}>
                <Panel.Heading>{this.props.data.name}</Panel.Heading>
                <Panel.Body>
                    {this.props.data.description}
                    <br/>
                    
                    <br/>
                    {this.props.data.imageurl}
                </Panel.Body>
            </Panel>
            
        );
    }
}

export default PlaylistCard;