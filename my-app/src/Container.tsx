import type { Component } from 'solid-js';
import { Routes, Route, A } from '@solidjs/router';
import Markdown  from './Markdown';

const Container: Component = () => {
  return (
    <div>
      <h1>Hello Solidjs</h1>
      <nav>
        <A href="/markdown">Markdown</A>
      </nav>
      <Routes>
        <Route path="/markdown" component={Markdown} />
      </Routes>
    </div>
  );
};

export default Container;