import React, { Component } from 'react';
import FilePlayer from 'react-player/lib/players/FilePlayer'
import { getPodcastInfo } from 'api/podcast.service'
import './playpodcast.css';

class PlayPodcast extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id
    }
    getPodcastInfo(this.props.id).then(payload => console.log(payload.data));
  }

  render() {
    return (
      <div className="play-podcast">
        PlayPodcast Page !!
        <br />
        id: {this.state.id}
        <br />
        <FilePlayer
          url='https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3'
          controls
          config={{file: { forceAudio: true } }}
        />
      </div>
    );
  }
}

export default PlayPodcast;
