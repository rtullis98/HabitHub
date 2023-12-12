/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { deleteHabit } from '../api/habitEndpoints';

const HabitGrid = ({ habits, isAuthenticated, onUpdate }) => {
  const deleteMyHabit = (id) => {
    if (window.confirm('Delete This Habit?')) {
      deleteHabit(id).then(() => onUpdate());
    }
  };

  return (
    <div className="row">
      {habits.map((habit) => (
        <div key={habit.id} className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              {habit.imageUrl && <img src={habit.imageUrl} alt="habit" />}
              <h5 className="card-title">{habit.title}</h5>
              <p className="card-text"> {habit.description}</p>
              <p className="card-text">Tags: {habit.tags ? habit.tags.map((tag) => tag.name).join(', ') : 'No tags'}</p>

              <div className="d-flex justify-content-between">
                <Link passHref href={`/habit/${habit.id}`}>
                  <Button variant="primary" className="mt-3 btn-sm" style={{ height: '32px' }}>
                    View
                  </Button>
                </Link>
                {isAuthenticated && (
                <Link passHref href={`/edit/${habit.id}`}>
                  <Button variant="primary" className="mt-3 btn-sm" style={{ height: '32px' }}>
                    Edit
                  </Button>
                </Link>
                )}
                {isAuthenticated && (
                  <Link passHref href={`/habit/habitTag/${habit.id}`}>
                    <Button variant="success" className="mt-3 btn-sm" style={{ height: '32px' }}>
                      Add Tag
                    </Button>
                  </Link>
                )}
                {isAuthenticated && (
                  <Button variant="secondary" className="mt-3 btn-sm" style={{ height: '32px' }} onClick={() => deleteMyHabit(habit.id)}>
                    Delete
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
const habitShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.string,
  imageUrl: PropTypes.string,
});

HabitGrid.propTypes = {
  habits: PropTypes.arrayOf(habitShape).isRequired,
  isAuthenticated: PropTypes.bool,
  onUpdate: PropTypes.func,
};

HabitGrid.defaultProps = {
  isAuthenticated: false,
  onUpdate: () => {},
};

export default HabitGrid;
