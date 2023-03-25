import type { Component } from 'solid-js';
import { A } from '@solidjs/router';

const HeaderContainer: Component = () => {
  return (
    <div>
      <nav>
        <A href="/demo">Demo</A>
      </nav>
    </div>
    
  );
};

export default HeaderContainer;