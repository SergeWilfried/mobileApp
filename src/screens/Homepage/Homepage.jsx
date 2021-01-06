import React from 'react';

import HomepageEmpty from 'components/HomepageEmpty';
import HomepageTransaction from 'components/HomepageTransaction';

const Homepage = () => {
  const isTransactionList = 'd';

  return <>{isTransactionList ? <HomepageTransaction /> : <HomepageEmpty />}</>;
};
export default Homepage;
