import React, { Component } from 'react';
import PodcastService from '../../api/podcast.service';

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
        PodcastService.createPodcast(this.state.title, this.state.description, this.state.uploader)
            .then((result) => {
                console.log(result);
            })
            .catch((err) => console.error('Error', err));
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
                            <input type="text" className="form-control" id="description" placeholder="Enter description"
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

export default Upload;