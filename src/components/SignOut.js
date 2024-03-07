// components/SignOutButton.js

import { useState } from 'react';
import { signOut } from 'next-auth/react';

function SignOutHandler() {
  const [signingOut, setSigningOut] = useState(false);

  const handleSignOut = async () => {
    try {
      setSigningOut(true);

      const response = await signOut();

      if (response.ok) {
        console.log('User signed out successfully');
        // Handle any additional client-side cleanup or navigation
      } else {
        console.error('Failed to sign out user');
        // Handle the error accordingly
      }
    } catch (error) {
      console.error('An error occurred while signing out:', error);
      // Handle the error accordingly
    } finally {
      setSigningOut(false);
    }
  };

  return (
    <button onClick={handleSignOut} disabled={signingOut}>
      Sign Out
    </button>
  );
}

export default SignOutHandler;
