import React from 'react';
import PropTypes from 'prop-types';

const ListComponent = ({ item }) => (
  <>

    <tr style={{ border: '2px solid #ccc', textAlign: 'center', backgroundColor: '#fff' }}><td className="p-2 w-25">{item}</td></tr>

  </>
);

export default ListComponent;

ListComponent.propTypes = {
  item: PropTypes.string.isRequired,
};
