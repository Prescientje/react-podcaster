import React, { Component } from 'react';
import './EditPodcast.css'
import PodcastService from '../../api/podcast.service';

class EditPodcast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            description: '',
            uploader: '',
            podcastFile: '',
            filename: 'Choose a file...'
        };
    }

    componentDidMount() {
      this.retrievePodcastWithId(this.props.match.params.id);
    }
  
    retrievePodcastWithId = (id) => {
        PodcastService.getPodcastInfo(id).then((podcastInfo) => {
            const podcastData = podcastInfo.data;
            if (podcastData && podcastData.data) {
                this.setState({
                    id: podcastData.data._id,
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
        PodcastService.updatePodcast(this.state.id, this.state.title, this.state.description, this.state.uploader).then((updatedPodcast) => {
            console.log('Updated podcast', updatedPodcast);
        }).catch((error) => console.error('Error', error));
    }

    uploadPodcast = () => {
        PodcastService.uploadPodcast(this.state.id, this.state.podcastFile).then((res) => {
            this.props.history.push('/');
        }).catch(err => console.error('Error', err));
    }

    setPodcastFile = (event) => {
        if (event.target.files.length > 0) {
            this.setState({
                podcastFile: event.target.files[0],
                filename: event.target.files[0].name
            });
        }
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
                        <label className="custom-file-label" htmlFor="podcastFile">{this.state.filename}</label>
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
