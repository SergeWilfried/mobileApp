import React, { useState } from 'react';

import HomepageHeader from 'components/HomepageHeader';
import HomepageNavbar from 'components/HomepageNavbar';
import HomepageEmpty from 'components/HomepageEmpty';
import HomepageTransaction from 'components/HomepageTransaction';

const Homepage = () => {
  const [location, setLocation] = useState('');
  const AVATARURL = '';
  const USERNAME = 'Tatyana';
  const isTransactionList = 'd';

  return (
    <>
      { location ? <HomepageNavbar avatarUrl={AVATARURL} username={USERNAME} /> : <HomepageHeader title="Your balance" subtitle="₣ 3,588" avatarUrl={AVATARURL} username={USERNAME} />}
      { isTransactionList ? <HomepageTransaction setLocation={setLocation} /> : <HomepageEmpty />}
    </>
  );
};

export default Homepage;
