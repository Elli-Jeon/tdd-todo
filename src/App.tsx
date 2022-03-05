import React from 'react';
import List from './components/List';
import { ITask } from './types';

function App() {
  const tasks: ITask[] = [
    { id: 1, todo: 'TDD 공부하기' },
    { id: 2, todo: 'voice 구현하기' },
  ];

  return (
    <div className="App">
      <h1>TDD로 todo 만들기</h1>
      <List tasks={tasks}></List>
    </div>
  );
}

export default App;
