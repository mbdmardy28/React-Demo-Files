import React, { Fragment } from 'react';
import TaskComponent from './component/Task';
import { Header } from './component/layout';

function App() {
  return (
    <Fragment>
      <Header/>
      <TaskComponent />
    </Fragment>
  );
}

export default App;
