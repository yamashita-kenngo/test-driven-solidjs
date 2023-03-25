import type { Component } from 'solid-js';
import HeaderContainer from './containers/header-container';
import MainContainer from './containers/main-container';

const App: Component = () => {
  return (
    <div>
      <header class="bg-orange-200 font-bold p-4">
        <HeaderContainer />
      </header>
      <main class="bg-slate-200 h-screen">
        <MainContainer />
      </main>
    </div>
      
  );
};

export default App;
