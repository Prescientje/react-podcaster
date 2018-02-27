import api from './api';

export function getPodcastInfo() {
    return api.get('podcast');
}

export function getAllPodcasts() {
    return api.get('podcasts');
}
