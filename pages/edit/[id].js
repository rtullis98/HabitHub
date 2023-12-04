/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AddHabitForm from '../../components/AddHabitForm';
import { getSingleHabit } from '../../api/habitEndpoints';

export default function EditHabit() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleHabit(id).then((data) => setEditItem(data));
  }, []);

  return (<AddHabitForm obj={editItem} />);
}
