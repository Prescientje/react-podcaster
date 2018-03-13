import React, { Component } from 'react';
import './EditPodcast.css'
import PodcastService from '../../api/podcast.service';

class EditPodcast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            uploader: '',
            podcastFile: ''
        };
    }

    componentWillMount() {
      this.retrievePodcastWithId(this.props.match.params.id);
    }
  
    retrievePodcastWithId = (id) => {
        PodcastService.getPodcastInfo(id).then((podcastInfo) => {
            const podcastData = podcastInfo.data;
            if (podcastData && podcastData.data) {
                this.setState({
                    title: podcastData.data.title,
                    description: podcastData.data.description,
                    uploader: podcastData.data.uploader
                });
            } else {
                console.error('Podcast data does not exist', podcastData);
            }
        }).catch((err) => console.error('error', err));
    }

    updatePodcast = () => {
        console.log('Updating podcast');
    }

    uploadPodcast = () => {
        console.log('Uploading podcast', this.state.podcastFile);
    }

    setPodcastFile = (event) => {
        if (event.target.files.length > 0) {
            this.setState({
                podcastFile: event.target.files[0]
            });
        }
    }

    render() {
        return (
            <span>
                <h5>Edit Podcast Information</h5>
                <button className="btn btn-primary update-podcast-btn" onClick={this.updatePodcast} >Update</button>
                <form className="edit-podcast">
                    <div className="form-group">
                        <label htmlFor="editTitle">Title</label>
                        <input type="text" className="form-control" id="editTitle" placeholder="Enter podcast title"
                            value={this.state.title} onChange={this.handleChangeTitle} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="editDescription">Description</label>
                        <textarea className="form-control" id="editDescription" placeholder="Enter description" rows="3"
                            value={this.state.description} onChange={this.handleChangeDescription} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="podcastUploader">Uploader Username</label>
                        <input type="text" className="form-control" id="podcastUploader" value={this.state.uploader} readOnly/>
                    </div>
                </form>
                <div className="input-group mb-3 upload-podcast">
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="podcastFile" onChange={this.setPodcastFile} />
                        <label className="custom-file-label" htmlFor="podcastFile">Choose file</label>
                    </div>
                    <div className="input-group-append">
                        <span className="input-group-text upload-button" onClick={this.uploadPodcast}>Upload</span>
                    </div>
                </div>
            </span>
        );
    }
}

export default EditPodcast;
