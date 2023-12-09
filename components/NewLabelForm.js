import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createTag } from '../api/tagEndpoints';

const initialState = {
  name: '',
};

function NewLableForm({ onUpdate, type }) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formData };

    if (type.toLowerCase() === 'tag') {
      createTag(payload).then(() => onUpdate());
    }
    e.target.reset();
  };

  return (
    <>
      <div style={{ border: '2px solid #ccc', borderRadius: '10px', padding: '20px' }}>
        {/* <h4>Create a new { type === 'tag' ? <span>Tag</span> : </h4> */}
        <h4>Create a new {type}</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" name="name" required onChange={handleChange} />
          </Form.Group>
          <Button variant="secondary" className="btn-sm" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>

  );
}

NewLableForm.propTypes = {
  type: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default NewLableForm;
