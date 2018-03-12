import api from './api';

const PodcastService = {
    getPodcastInfo: (id) => {
        return api.get(`podcast/${id}`);
    },
    getAllPodcasts: () => {
        return api.get('podcasts');
    },
    createPodcast: (title, description, uploader) => {
        return api.post('podcast', {title: title, description: description, uploader: uploader});
    },
    uploadPodcast: (id) => {
        return api.post(`podcast/${id}/upload`);
    }
};

export default PodcastService;
