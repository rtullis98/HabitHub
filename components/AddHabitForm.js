import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FloatingLabel, Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { createHabit, updateHabit } from '../api/habitEndpoints';
import { checkUser } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

const initialState = {
  // Id: 0,
  title: '',
  description: '',
  imageUrl: '',
};

export default function AddHabitForm({ obj }) {
  const [formData, setFormData] = useState(initialState);
  const [, setUser] = useState({});
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    checkUser(user.id).then(setUser);
    if (obj.id) {
      setFormData(obj);
    }
  }, [user, obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      const payload = { ...formData, Id: obj.id };
      updateHabit(payload)
        .then(() => router.push('/'))
        .catch((error) => {
          console.error('API Error:', error);
        });
    } else {
      const payload = { ...formData, UserId: user.id };
      createHabit(payload)
        .then(() => router.push('/'))
        .catch((error) => {
          console.error('API Error:', error);
        });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>

        {/* IMAGE INPUT AS STRING */}
        <FloatingLabel controlId="floatingInput1" label="Enter habit image" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter an image url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput2" label="Enter the title of your habit" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter Habit Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput3" label="Habit Description" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Habit Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        {/* SUBMIT BUTTON  */}

        <Button type="submit" className="btn-secondary mt-2">{obj.id ? 'Update' : 'Create'} Habit</Button>
      </Form>
    </>
  );
}

AddHabitForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
    userId: PropTypes.number,
  }),
};
AddHabitForm.defaultProps = {
  obj: initialState,
};
