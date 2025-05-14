import { useEffect } from 'react';
import './App.css';
import AddHabit from './components/add-habit-form';
import HabitList from './components/habit-list';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from './store/todo.slice';

function App() {
  const { todos, loading, error } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  // by mentioning the dispatch in the dependency array the api called only once because the dispatch will be stable.
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Habit Tracker</h1>
        <AddHabit />
        <HabitList />
        {todos &&
          <>
            <h5>API using Redux</h5>
            <ul>
              {todos.map(todo => (
                <li key={todo.id}>{todo.todo}</li>
              ))}
            </ul>
          </>
        }
        {loading && <p>Loading...</p>}
        {error && <p>Error:{error}</p>}
      </header>
    </div>
  );
}

export default App;