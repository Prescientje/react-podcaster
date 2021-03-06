import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PodcastService from '../../api/podcast.service';
import { addAlert } from '../../store/actions/alerts';

class Upload extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            uploader: 'jedwards'
        };
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    handleChangeDescription = (event) => {
        this.setState({
            description: event.target.value
        });
    }

    handleChangeUploader = (event) => {
        this.setState({
            uploader: event.target.value
        });
    }

    create = (event) => {
        const { addAlert } = this.props.actions;
        PodcastService.createPodcast(this.state.title, this.state.description, this.state.uploader)
            .then((result) => {
                const podcastData = result.data;
                if (podcastData && podcastData.data) {
                    const podcastId = podcastData.data._id;
                    this.props.history.push(`/edit/${podcastId}`);
                    addAlert({ text: 'Successfully created a new podcast', color: 'success' });
                } else {
                    addAlert({ text: 'An error occured while creating a podcast', color: 'danger' });
                }
            })
            .catch((err) => addAlert({ text: 'Failed to create a new podcast', color: 'danger' }));
    }

  render() {
    return (
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Create a new podcast</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form onSubmit={this.create}>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" placeholder="Enter podcast title"
                                value={this.state.title} onChange={this.handleChangeTitle} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" id="description" placeholder="Enter description" rows="3"
                                value={this.state.description} onChange={this.handleChangeDescription} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="uploader">Uploader Username</label>
                            <input type="text" className="form-control" id="uploader" placeholder="Enter your username"
                                value={this.state.uploader} onChange={this.handleChangeUploader} required />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button className="btn btn-primary" onClick={this.create} data-dismiss="modal">Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
  }
}

Upload.propTypes = {
    actions: PropTypes.shape({
        addAlert: PropTypes.func.isRequired
    }).isRequired
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ addAlert }, dispatch)
});

export default connect(null, mapDispatchToProps)(Upload);
