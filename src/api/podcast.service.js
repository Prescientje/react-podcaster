import api from './api';

export function getPodcastInfo() {
    return api.get('podcast');
}

export function getAllPodcasts() {
    return [
        {
            id: 1,
            title: 'Podcast 1',
            description: 'The first podcast',
            dateUploaded: Date.now(),
            uploader: 'jedwards'
        },
        {
            id: 2,
            title: 'Podcast 2',
            description: 'The second podcast',
            dateUploaded: Date.now(),
            uploader: 'jedwards'
        },
        {
            id: 3,
            title: 'Podcast 3',
            description: 'The third podcast',
            dateUploaded: Date.now(),
            uploader: 'jedwards'
        }
    ]
}
