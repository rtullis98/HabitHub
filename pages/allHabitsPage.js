import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import Head from 'next/head';
import { getAllHabits } from '../api/habitEndpoints';
import HabitGrid from '../components/HabitGrid';

export default function AllHabitsPage() {
  const [allHabits, setAllHabits] = useState([]);

  useEffect(() => {
    getAllHabits().then((data) => setAllHabits(data));
  }, []);

  return (
    <div>
      <Head>
        <title>All Habits</title>
      </Head>
      <div className="d-flex justify-content-between">
        <h1 className="py-3">All Habits</h1>
        <Link passHref href="/createHabitPage">
          <Button variant="primary" className="mt-3 btn-sm" style={{ height: '32px' }}>
            Create Habit
          </Button>
        </Link>
      </div>
      <HabitGrid posts={allHabits} />
    </div>
  );
}
