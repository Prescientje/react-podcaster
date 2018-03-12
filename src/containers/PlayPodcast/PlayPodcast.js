import React, { Component } from 'react';
import FilePlayer from 'react-player/lib/players/FilePlayer'
import { getPodcastInfo } from 'api/podcast.service'
import './playpodcast.css';

class PlayPodcast extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      uploadLocation: ""
    }
  }

  componentDidMount() {
    getPodcastInfo(this.props.id).then(payload => {
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
