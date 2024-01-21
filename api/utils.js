import axios from 'axios';
// const {MEME_API} = require('./constants');
import { MEME_API, BACKEND_API } from './constants';
import { func } from 'prop-types';


export async function giveRandomMeme() {
    // https://meme-api.com/gimme
    // console.log("attempted to fetch from ", MEME_API)
    try {
        const response = await axios.get(BACKEND_API + `api/getMeme`);
        const memeData = response.data;

        const lastPreview = memeData.preview;
            return { lastPreview, url: memeData.url, title: memeData.title };
        
    } catch (error) {
        console.error('Error fetching meme:', error);
        return { lastPreview: "#", url: 'No previews available' };
    }
}


export async function getPosts({filter = ""} = {}) {

    const response = await axios.get(BACKEND_API + `forum/${filter}`);
    const posts = response.data;
    return posts;
}


export async function createForum(newPostData) {
    
    const response = await axios.post(BACKEND_API + `forum/`, newPostData);
    const newPost = response.data;
    return newPost;
  }
  

export async function respondThread(newPostData) {
    /**
     * {
        "body": "string",
        "title": "string",
        "email": "string",
        "parent_id": 0
      }
     */
    const response = await axios.post(BACKEND_API + `forum/comments`, newPostData);

    const newPost = response.data;
    return newPost;

}

export async function getForum(id) {
    const response = await axios.get(BACKEND_API + `forum/${id}`);
    const forum = response.data;
    return forum;
}


