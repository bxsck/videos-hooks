import {useState,useEffect} from 'react';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyB9yYDkGhPJP7uRL2wWPiPmDwoZrsLx2Bw';

const useVideos = (defaultSearchTerm) =>{
    const [videos,setVideos] = useState([]);

    useEffect(()=>{
        search(defaultSearchTerm);
        
      },[defaultSearchTerm]);

    const search = async (term) => {
    const response = await youtube.get('/search', {
        params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
        },
    });
    setVideos(response.data.items);
    };

    return [videos, search];
};

export default useVideos;