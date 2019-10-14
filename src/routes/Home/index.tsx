import React from 'react';

import LinkButton from 'components/Buttons/LinkButton';
import ROUTES from 'static/routes';
import './css/styles.css';

const Home: React.FC = () => {
  return (
    <section className='home'>
      <h1>Hello!</h1>
      <div className='home__section-wrapper'>
        <p>
          If you'd like to display <mark>Courts list</mark> click button below.
        </p>
        <LinkButton
          customCssClass=''
          route={ROUTES.courts}
          content='Show courts list'
        />
      </div>
      <div className='home__section-wrapper'>
        <p>
          If you'd like to display <mark>Schools list</mark> click button below.
        </p>
        <LinkButton
          customCssClass=''
          route={ROUTES.schools}
          content='Show schools list'
        />
      </div>
    </section>
  );
}

export default Home;
