import axios from 'axios';
// const {MEME_API} = require('./constants');
import { MEME_API, BACKEND_API } from './constants';

const SAMPLE_USER_GUID = 'bbf8e248-ca89-41c4-b55c-e4e20977a6e0'
const SAMPLE_TOPIC_ID = 'a72dd8bb-0ea0-48d7-9f55-df30b236ecdf'
/**
 * New Recording Data
 * @param {data} newRecordingData 
 * {
    "preparation_time": 50,
    "user_id": '6877986f-ce17-452a-900f-b94fa66064b8',
    "start_ch_time": "2024-01-27T20:50:00.406577",
    "end_res_time": "2024-01-27T20:50:00.406577",
    "topic_id": 0
    }
 * @returns 
 */
export async function postRecording(newRecordingData) {
    const response = await axios.post(BACKEND_API + `api_presentation/record`, newRecordingData);

    const newRecording = response.data;
    return newRecording;
}

export async function randomizeOptions() {
    const response = await axios.get(BACKEND_API + `api_presentation/topics`);
    const randomOptions = response.data;
    return randomOptions;
}


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


export async function getPosts({ filter = "" } = {}) {

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


