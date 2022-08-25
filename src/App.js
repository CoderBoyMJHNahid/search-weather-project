import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Box from './Box';

const App = () => {
  return (
    <>
      <div id="widget" style={{width:'100%',height:'100vh'}}>
        <Box/>
      </div>
    </>
  );
};

export default App;
