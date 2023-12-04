import React, { useState } from 'react';
import Head from 'next/head';
import { useAuth } from '../utils/context/authContext';
import { getHabitsByUser } from '../api/habitEndpoints';
import HabitGrid from '../components/HabitGrid';

export default function MyHabitsPage() {
  const { user } = useAuth();
  const [myHabits, setmyHabits] = useState([]);
  let isAuthenticated = false;

  const getMyHabits = () => {
    getHabitsByUser(user.id).then((data) => setmyHabits(data));
  };
  useState(() => {
    getMyHabits();
  }, []);

  if (user.uid != null) {
    isAuthenticated = true;
  }

  return (
    <div>
      <Head>
        <title>My Habits</title>
      </Head>
      <h1 className="py-3">My Habits</h1>
      <HabitGrid habits={myHabits} isAuthenticated={isAuthenticated} onUpdate={getMyHabits} />
    </div>
  );
}
