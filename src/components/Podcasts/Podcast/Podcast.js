import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './podcast.css';

class Podcast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: this.props.info.description,
            date: this.props.info.dateUploaded,
            title: this.props.info.title,
            uploader: this.props.info.uploader,
            id: this.props.info._id
        }
    }

    formatDate(date) {
        if (date) {
            return new Date(date).toDateString()
        }
    }

    render() {
        return (
            <div className="card podcast-preview">
                <div className="card-body">
                    <h5 className="card-title">{this.state.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.state.uploader}</h6>
                    <p className="card-text">{this.state.description}</p>
                    {
                        this.props.isAuthenticated ? (
                            <Link to={`/edit/${this.state.id}`} className="card-link btn-primary btn listen-link">Edit</Link>
                        ) : (<span></span>)
                    }
                    <Link to={`/podcast/${this.state.id}`} className="card-link btn-primary btn listen-link">Listen</Link>
                </div>
                <div className="card-footer text-muted">
                    Uploaded on {this.formatDate(this.state.date)}
                </div>
            </div>
        );
    }
}

export default Podcast;