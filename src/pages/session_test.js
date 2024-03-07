import { useSession, signIn, signOut } from 'next-auth/react';

function Home() {
  const { data: session, status } = useSession();
  if(session){
    console.log("session", session)
  }else{
    console.log("status", status)
  }
  return (
    <div>
      {session ? (
        <>
          <p>Welcome, {String(session)}!</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <p>You are not signed in</p>
          <button onClick={() => signIn('credentials')}>Sign in</button>
        </>
      )}
    </div>
  );
}

export default Home;
