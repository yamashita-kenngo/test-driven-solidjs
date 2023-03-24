import type { Component } from 'solid-js';
import { A } from '@solidjs/router';

const HeaderContainer: Component = () => {
  return (
    <nav>
      <A href="/demo">Demo</A>
    </nav>
  );
};

export default HeaderContainer;