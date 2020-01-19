import React from 'react';
import withInteractive from '../../store/redux/containers/withInteractive';

const Home = ({ R_count }) => (
  <div>
    <p>Home screen</p>
    <p>
count
      {' '}
      {R_count}
    </p>
  </div>
);

export default withInteractive(Home);
