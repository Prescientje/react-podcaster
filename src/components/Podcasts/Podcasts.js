import React, { Component } from 'react';
import './podcasts.css';
import Podcast from './Podcast/Podcast';
import PodcastService from '../../api/podcast.service';

class Podcasts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            podcasts: []
        };
    }

    componentDidMount() {
      this.retrievePodcastList();
    }
  
    retrievePodcastList = () => {
        PodcastService.getAllPodcasts().then(payload => {
            const podcastList = payload.data.data;
            if ( podcastList && podcastList.length > 0 ) {
                this.setState({
                    podcasts: podcastList
                });
            }
        }).catch(err => console.error(err));
    }

    render() {
        return (
            <div className="podcast-list">
                {
                    this.state.podcasts ? this.state.podcasts.map((podcast, index) => {
                        return (<Podcast info={podcast} key={index} isAuthenticated={this.props.isAuthenticated} />);
                    }) : (<span>Loading...</span>)
                }
            </div>
        );
    }
}

export default Podcasts;
