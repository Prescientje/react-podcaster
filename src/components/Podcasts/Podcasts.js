import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './podcasts.css';
import Podcast from './Podcast/Podcast';
import PodcastService from '../../api/podcast.service';
import { addAlert } from '../../store/actions/alerts';

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
        const { addAlert } = this.props.actions;
        PodcastService.getAllPodcasts().then(payload => {
            const podcastList = payload.data.data;
            if ( podcastList && podcastList.length > 0 ) {
                this.setState({
                    podcasts: podcastList
                });
            }
        }).catch(err => addAlert({ text: 'Unable to retrieve the list of podcasts', color: 'danger' }));
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

Podcasts.propTypes = {
    actions: PropTypes.shape({
        addAlert: PropTypes.func.isRequired
    }).isRequired
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ addAlert }, dispatch)
});

export default connect(null, mapDispatchToProps)(Podcasts);
