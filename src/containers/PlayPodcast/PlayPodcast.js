import React, { Component } from 'react';
import FilePlayer from 'react-player/lib/players/FilePlayer';
import './playpodcast.css';
import PodcastService from '../../api/podcast.service';

class PlayPodcast extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      uploadLocation: ""
    }
  }

  componentDidMount() {
    PodcastService.getPodcastInfo(this.props.id).then(payload => {
      this.setState({uploadLocation: payload.data.data.uploadLocation})
    });
  }

  render() {
    return (
      <div className="play-podcast">
        PlayPodcast Page !!
        <br />
        <FilePlayer
          url={this.state.uploadLocation}
          controls
          config={{file: { forceAudio: true } }}
        />
      </div>
    );
  }
}

export default PlayPodcast;
