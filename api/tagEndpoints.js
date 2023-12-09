import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

// GET ALL TAGS
const getAllTags = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/tags`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(async (res) => {
      let data;
      if (res.ok) {
        data = await res.json();
        resolve(data);
      }
    })
    .catch(reject);
});

// Create Tag
const createTag = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/tag`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((resp) => resp.json())
    .then(resolve)
    .catch(reject);
});

const addTagToHabit = (HabId, tagId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/habit/taghabit/${HabId}/${tagId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ HabId, tagId }),
  })
    .then(async (res) => {
      if (res.ok) {
        const data = await res.json();
        resolve(data);
      } else {
        reject(new Error(`Failed to add tag to habit. Status: ${res.status}`));
      }
    })
    .catch((error) => {
      reject(error);
    });
});

export {
  getAllTags,
  createTag,
  addTagToHabit,
};
