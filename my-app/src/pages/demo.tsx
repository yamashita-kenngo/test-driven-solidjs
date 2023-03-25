import type { Component } from "solid-js";
import Button  from "./../ui/button";

const Demo: Component = () => {
  return (
    <div class="bg-green-200 h-24 min-h-full">
      <h1>Demo</h1>
      <Button
        color="accent"
        size="small"
        onClick={() => console.log('Clicked')}
      >
        Click Me
      </Button>
    </div>
  );
};

export default Demo;