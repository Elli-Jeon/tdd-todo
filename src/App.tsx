import React from 'react';
import { useAppSelector } from 'hooks/redux';
import List from './components/List';

function App() {
  const tasks = useAppSelector((state) => state.tasks);

  return (
    <div className="App">
      <h1>TDD로 todo 만들기</h1>
      <List tasks={tasks}></List>
    </div>
  );
}

export default App;
