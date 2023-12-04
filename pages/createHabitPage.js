import React from 'react';
import Head from 'next/head';
import AddHabitForm from '../components/AddHabitForm';

const CreateHabitPage = () => (
  <div>
    <Head>
      <title>Create Habit</title>
    </Head>
    <h1 className="py-3">Create Habit</h1>
    <AddHabitForm />
  </div>
);

export default CreateHabitPage;
