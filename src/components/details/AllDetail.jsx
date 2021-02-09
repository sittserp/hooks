import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from '../../services/rickAndMortyDetails';
import Detail from './Detail';


const AllDetail = () => {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getDetails(id).then((detail) => {
      setDetail(detail);
      setLoading(false);
    });
  }, []);

  if (loading) return <h1>Loading</h1>;
  return <Detail {...detail} />;
};

export default AllDetail;
