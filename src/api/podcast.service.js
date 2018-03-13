import api from './api';
import AuthService from './auth.service';

const PodcastService = {
    getPodcastInfo: (id) => {
        return api.get(`podcast/${id}`);
    },
    getAllPodcasts: () => {
        return api.get('podcasts');
    },
    createPodcast: (title, description, uploader) => {
        return api.post('podcast', { title, description, uploader }, { 
            headers: { 'Authorization': AuthService.getBearerToken() }
        });
    },
    uploadPodcast: (id) => {
        return api.post(`podcast/${id}/upload`);
    }
};

export default PodcastService;
