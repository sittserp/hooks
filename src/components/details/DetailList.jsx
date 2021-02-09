import React from 'react';
import PropTypes from 'prop-types';
import Detail from './Detail';

const DetailList = ({ characters }) => {
  const characterElements = characters.map(character => (
    <li key={character.id}>
      <Detail {...character} />
    </li>
  ));

  return (
    <ul>
      {characterElements}
    </ul>
  );
};

DetailList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default DetailList;
