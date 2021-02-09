import React, { Component } from 'react';
import { getDetails } from '../../services/rickAndMortyDetails';
// import DetailList from './DetailList';
import Detail from './Detail';

export default class AllDetail extends Component {
    state = {
      character: {}
    }

    componentDidMount() {
      // eslint-disable-next-line react/prop-types
      getDetails(this.props.match.params.id)
        .then(character => this.setState({ character }));
    }

    render() {
      const { character } = this.state;

      return (
        <Detail {...character} />
      );
    }
} 
