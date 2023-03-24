import type { Component } from "solid-js";
import { Routes, Route, A } from '@solidjs/router';
import Demo from '../pages/demo';

const MainContainer: Component = () => {
  return (
    <div>
      <h1>
      <nav>
        <A href="/">My App</A>
      </nav>
      </h1>
      <div class="flex flex-col">
      <Routes>
        <Route path="/demo" component={Demo} />
      </Routes>
      </div>
      
    </div>
  );
};

export default MainContainer;