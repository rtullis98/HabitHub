/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { addTagToHabit } from '../api/habitEndpoints';
import { checkUser } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import { getAllTags } from '../api/tagEndpoints';

function AddTagToHabit({ HabId }) {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');
  const [, setRareUser] = useState({});
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    checkUser(user.id).then(setRareUser);
    getAllTags().then((tagsData) => {
      setTags(tagsData);
    });
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTag) {
      const newHabitId = HabId[0]?.id;
      addTagToHabit(newHabitId, selectedTag)
        .then((data) => {
          console.warn('Tag added to habit:', data);
        })
        .then(router.push('/myHabitsPage'))
        .catch((error) => {
          console.error('Error adding tag to habit:', error);
        });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGridTag">
          <Form.Select
            aria-label="Tag"
            name="TagId"
            onChange={(e) => setSelectedTag(e.target.value)}
            className="mb-3"
            value={selectedTag}
          >
            <option value="">Select a Tag</option>
            {tags.map((tag) => (
              <option key={tag.id} value={tag.id}>
                {tag.label}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button type="submit">Add Tag</Button>
      </Form>
    </>
  );
}

AddTagToHabit.propTypes = {
  HabId: PropTypes.number.isRequired,
};

export default AddTagToHabit;
