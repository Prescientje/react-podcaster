import api from './api';

export function getPodcastInfo() {
    return api.get('podcast');
}
