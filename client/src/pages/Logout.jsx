import React from 'react';
import auth from '../services/authService';

function Logout() {
  React.useEffect(() => {
    auth.logout();
    window.location = '/';
  }, []);

  return null;
}

export default Logout