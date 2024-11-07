// AllExpences.js
import React, { useContext } from 'react';
import ExpencesOutput from '../components/ExpencesOutput/ExpencesOutput';
import { ExpencesContext } from '../store/expences-context';

const AllExpences = () => {
  const expencesCtx = useContext(ExpencesContext);
  return (
    <ExpencesOutput expences={expencesCtx.expences} expencesPeriod='Total' />
  );
};

export default AllExpences;
