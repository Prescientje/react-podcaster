import React, { Component } from 'react';
import './podcast.css';
import { getPodcastInfo } from 'api/podcast.service';

class Podcast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: 'testing the description',
            date: new Date(),
            title: this.props.title
        }
    }

    componentDidMount() {
        this.setState( {uploader: 'jedwards'});
        getPodcastInfo().then((payload) => {
            console.log("info: ", payload)
            this.setState({description: payload.data});
        }).catch((err) => {
            console.error(err)
        })
    }

    render() {
        return (
            <div className="Podcast1">
              <p>Title: {this.state.title}</p>
              <p>Uploader: {this.state.uploader}</p>
              <p>Description: {this.state.description}</p>
              <p>Date Uploaded: {this.state.date.toLocaleString() }</p>
              <p></p>
            </div>
        );
    }
}

export default Podcast;