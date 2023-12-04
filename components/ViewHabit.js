/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'next/link';
// import { Button } from 'react-bootstrap';

const ViewHabit = ({ habits }) => (
  <div className="row">
    {habits.map((habit) => (
      <div key={habit.id} className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            {habit.imageUrl && <img src={habit.imageUrl} alt="habit" />}
            <h5 className="card-title">{habit.title}</h5>
            <p className="card-text"> {habit.description}</p>
            <p className="card-text">Tag: {habit.tags}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const postShape = PropTypes.shape({
  Id: PropTypes.number,
  Title: PropTypes.string,
  UserName: PropTypes.string,
  Tags: PropTypes.string,
  imageUrl: PropTypes.string,
  Content: PropTypes.string,
});

ViewHabit.propTypes = {
  habits: PropTypes.arrayOf(postShape).isRequired,
};

export default ViewHabit;
