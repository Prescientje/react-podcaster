import React, { Component } from 'react';
import { createPodcast } from 'api/podcast.service';

class Upload extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            uploader: 'jedwards'
        };
    }

    componentDidMount() {
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

    create() {
        createPodcast(this.state.title, this.state.description, this.state.uploader).then((result) => console.log(result));
    }

  render() {
    return (
    <div className="upload">
        Upload Page
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
        </div>
        <button className="btn btn-medium" type="button" onClick={this.create.bind(this)}>Create Podcast</button>
        <div className="input-group mb-3">
            <div className="custom-file">
                <input type="file" className="custom-file-input" id="inputGroupFile02" />
                <label className="custom-file-label" htmlFor="inputGroupFile02">Choose file</label>
            </div>
            <div className="input-group-append">
                <span className="input-group-text" id="">Upload</span>
            </div>
        </div>
    </div>
    );
  }
}

export default Upload;