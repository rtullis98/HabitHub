/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';
import RegisterForm from '../components/RegisterForm';
import { checkUser } from '../utils/auth';

function Home() {
  const { user } = useAuth();
  const [authUser, setAuthUser] = useState();

  useEffect(() => {
    checkUser(user.uid).then((data) => setAuthUser(data));
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      { authUser?.uid === user.uid ? (
        <div
          className="text-center d-flex flex-column justify-content-center align-content-center"
          style={{
            height: '90vh',
            padding: '30px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <Link passHref href="/userProfile">
            <Button variant="light" className="bg-transparent fs-2 border-0 ">Hello, {user.fbUser.displayName}!</Button>
          </Link>
        </div>
      ) : (<RegisterForm />)}
    </>
  );
}

export default Home;
