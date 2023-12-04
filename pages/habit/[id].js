import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleHabit } from '../../api/habitEndpoints';
import ViewHabit from '../../components/ViewHabit';

export default function SingleHabitPage() {
  const router = useRouter();
  const { id } = router.query;
  const [habit, setHabit] = useState({});

  useEffect(() => {
    if (id) {
      getSingleHabit(id).then((data) => {
        setHabit(data);
      });
    }
  });

  if (!habit) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-3">
      <h2>View a Habit</h2>
      <div className="mt-5" style={{ display: 'flex' }}>
        <div style={{ flex: 2 }}>
          {Object.keys(habit).length > 0 && (
            <ViewHabit habits={[habit]} style={{ width: '100%' }} />
          )}
        </div>
      </div>
    </div>
  );
}
