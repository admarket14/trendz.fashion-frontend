import React from 'react';
import style from './Components.module.css';

const Index = () => {
  return (
    <div>
      <h2>Media Queries</h2>
      <p>Resize the browser window.</p>

      <p>Make sure you reach the breakpoint at 800px when resizing this frame.</p>

      <div className={style.left}>
        <p>Left Menu</p>
      </div>

      <div className={style.main}>
        <p>Main Content</p>
      </div>

      <div className={style.right}>
        <p>Right Content</p>
      </div>
    </div>
  );
};

export default Index;
