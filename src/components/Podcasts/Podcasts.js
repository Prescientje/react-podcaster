import React, { Component } from 'react';
import './podcasts.css';
import Podcast from './Podcast/Podcast';
import { getAllPodcasts } from 'api/podcast.service';

class Podcasts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            podcasts: []
        };

        this.retrievePodcastList.bind(this);
    }

    componentWillMount() {
      this.retrievePodcastList();
    }
  
    retrievePodcastList() {
        const podcastList = getAllPodcasts();
        this.setState({
            podcasts: podcastList
        });
    }

    render() {
        return (
            <div className="podcast-list">
                {
                    this.state.podcasts ? this.state.podcasts.map((podcast, index) => {
                        return (<Podcast info={podcast} key={index} />);
                    }) : (<span>Loading...</span>)
                }
            </div>
        );
    }
}

export default Podcasts;