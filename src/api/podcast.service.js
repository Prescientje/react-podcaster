import api from './api';

export function getPodcastInfo(id) {
    return api.get(`podcast/${id}`);
}

export function getAllPodcasts() {
    return api.get('podcasts');
}

export function createPodcast(title, description, uploader) {
    return api.post('podcast', {title: title, description: description, uploader: uploader});
}

export function uploadPodcast(id) {
    return api.post(`podcast/${id}/upload`);
}

