import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ name, image, status, species }) => (
  <figure>
    <img src={image} />
    <figcaption>{name}</figcaption>
    <figcaption>{status}</figcaption>
    <figcaption>{species}</figcaption>
  </figure>
);

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};

export default Detail;
