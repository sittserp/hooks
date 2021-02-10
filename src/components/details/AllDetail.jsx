/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { getDetails } from '../../services/rickAndMortyDetails';
import Detail from './Detail';


const AllDetail = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);

  console.log('match', match);

  useEffect(() => {
    getDetails(match.params.id).then((detail) => {
      setDetail(detail);
      setLoading(false);
    });
  }, []);

  if (loading) return <h1>Loading</h1>;
  return <Detail {...detail} />;
};



export default AllDetail;
