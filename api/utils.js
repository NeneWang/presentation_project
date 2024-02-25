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

export async function getProfile(id) {
    const response = await axios.get(BACKEND_API + `api_presentation/profile/${id}`);
    const profile = response.data;
    console.log("Profile", profile)
    return profile;
}

export async function getUserProfile() {
    /**
     * {
        "profile": [
            {
            "id": "bbf8e248-ca89-41c4-b55c-e4e20977a6e0",
            "name": "Demo1 User",
            "password": "$2b$12$AHA0MLcZhYuoVAi7CbwX8u6Gq4TJJC4sndfizONSZItjOSqfvY7kq",
            "email": "wangnelson4@gmail.com",
            "created_time": "2023-09-17T13:34:01.829175",
            "updated_time": "2024-02-24T02:00:47.454849",
            "default_competition_id": "7bc69deb-b1b4-4d45-aab1-43ce2d9caf8a"
            }
        ],
        "records": [
            {
                "id": "c4e1a770-395b-4aa7-bd07-00f884809b9e",
                "user_id": "bbf8e248-ca89-41c4-b55c-e4e20977a6e0",
                "end_res_time": "2024-01-17T20:54:50.621795",
                "created_time": "2024-01-18T01:54:49.338612",
                "preparation_time": 10,
                "start_ch_time": "2024-01-17T20:54:50.621795",
                "topic_id": "b3cb5d4a-a89f-4700-a881-e87055d80e66",
                "updated_time": "2024-01-18T01:54:49.338612",
                "topic": {
                    "level": 1,
                    "name": "The Future of Artificial Intelligence",
                    "description": "Discuss the current state of AI, its applications, and what the future might hold.",
                    "base_project_url": null,
                    "categories": [
                    "fe7ae450-50cb-4ee5-9fb7-5a84e3ae0e9d"
                    ],
                    "downvotes": 0,
                    "updated_time": "2024-01-18T01:54:47.395112",
                    "image": "",
                    "id": "b3cb5d4a-a89f-4700-a881-e87055d80e66",
                    "is_project_based": false,
                    "end_sample_url": null,
                    "upvotes": 0,
                    "created_time": "2024-01-18T01:54:47.395112"
                }
            }
        ]
        }
     */
    // Retrieve the userid in the Session
    return getProfile(SAMPLE_USER_GUID);

}


