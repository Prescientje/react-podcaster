import api from './api';

export function getPodcastInfo(id) {
    return api.get('podcast/'+id);
}

export function getAllPodcasts() {
    return api.get('podcasts');
}
