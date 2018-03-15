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
    updatePodcast: (id, title, description, uploader) => {
        return api.put(`podcast/${id}`, { title, description, uploader }, { 
            headers: { 'Authorization': AuthService.getBearerToken() }
        });
    },
    uploadPodcast: (id, file) => {
        var data = new FormData();
        data.append('podcast', file);
        var config = {
            onUploadProgress: function(progressEvent) {
              var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
            },
            headers: { 'Authorization': AuthService.getBearerToken() }
        };
        return api.post(`podcast/${id}/upload`, data, config);
    }
};

export default PodcastService;
