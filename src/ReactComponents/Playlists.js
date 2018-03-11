import PlaylistCard from './PlaylistCard'
import React, { Component } from 'react';
import { Col, Row, Jumbotron } from 'react-bootstrap';
var playlistData = require('./PlaylistInfo.json');

class Playlists extends Component{
    constructor(props, context){
        super(props, context);
        this.createPlaylistCard = this.createPlaylistCard.bind();
        this.state = {
            playlists: Object.values(playlistData)
        };
    }
    createPlaylistCard(playlist){
        return(
            <Col md={3}>
                <PlaylistCard data={playlist}/>
            </Col>
        );
    }
    render(){
        var playlists = this.state.playlists;
        var playlistCards = playlists.map(this.createPlaylistCard);
        return(
            <Jumbotron style={{margin: '10px'}}>
            <Row>
                {playlistCards}
            </Row>
        </Jumbotron>
        );
    }
}

export default Playlists;