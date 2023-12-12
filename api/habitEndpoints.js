import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getAllHabits = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/habits`, {
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

const getSingleHabit = (HabId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/habit/${HabId}`, {
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

const deleteHabit = (HabId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/habits/${HabId}/remove`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(async (res) => {
      if (res.ok) {
        resolve();
      }
    })
    .catch(reject);
});

const createHabit = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/habits/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
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

const updateHabit = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/habits/${payload.id}/update`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(async (res) => {
      let data;
      if (res.ok) {
        data = await res.json();
        resolve(data);
      } else {
        reject(new Error(`Failed to update habit. Status: ${res.status}`));
      }
    })
    .catch(reject);
});

const getHabitsByUser = (userId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/user/${userId}/habits`, {
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

const singleHabitByUser = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/singlehabitbyuser/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(async (res) => {
      if (res.ok) {
        const data = await res.json();
        resolve(data);
      } else {
        // Reject the promise if the response is not okay
        reject(new Error(`Failed to fetch habit. Status: ${res.status}`));
      }
    })
    .catch(reject);
});

const addTagToHabit = (HabId, tagId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/habit/taghabit/${HabId}/${tagId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
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
  getAllHabits,
  createHabit,
  updateHabit,
  getHabitsByUser,
  addTagToHabit,
  getSingleHabit,
  deleteHabit,
  singleHabitByUser,
};
