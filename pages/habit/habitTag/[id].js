import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { singleHabitByUser } from '../../../api/habitEndpoints';
import AddTagToHabit from '../../../components/AddTagToHabit';

export default function SingleHabitPage() {
  const router = useRouter();
  const { id } = router.query;
  const [habit, setHabit] = useState({});

  useEffect(() => {
    if (id) {
      singleHabitByUser(id).then((data) => {
        setHabit(data);
      });
    }
  }, [id]);

  if (!habit) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Add a Tag</h2>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 2 }}>
          {Object.keys(habit).length > 0 && (
            <AddTagToHabit HabId={habit} style={{ width: '100%' }} />
          )}
        </div>
      </div>
    </div>
  );
}
