import React, { Fragment } from 'react';
import { Header } from './component/layout';
import TaskComponent from './component/Task';
import { useDispatch } from 'react-redux';
import { FetchTasksAction } from './redux/TaskActions';

function App() {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Header/>
      <TaskComponent dispatchGetTasks={() => dispatch(FetchTasksAction())} />
    </Fragment>
  );
}

export default App;
