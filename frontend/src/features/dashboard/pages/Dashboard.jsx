import React from 'react';
import AllPost from '../../posts/pages/AllPost';
import '../style/Dashboard.css'

// Displays the post feed inside the dashboard layout.
const Dashboard = () => {
  return (
    <div className='all-posts'>
      <AllPost />
    </div>
  );
};

export default Dashboard;
