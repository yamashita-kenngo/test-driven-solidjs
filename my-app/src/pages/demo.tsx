import type { Component } from "solid-js";
import Button  from "./../ui/button";
const Demo: Component = () => {
  let input!: HTMLInputElement;
  let calendarEl!: HTMLDivElement;
  const onSubmit = () => {
    if(!input.value.trim()) return;
    console.log(input.value)
  };
  return (
    <div class="bg-green-200 h-24 min-h-full">
      <h1>Demo</h1>
      <input type="text" ref={input}/>
      <Button
        color="accent"
        size="small"
        onClick={() => {console.log('Clicked'); onSubmit();}}
      >
        Click Me
      </Button>
    </div>
  );
};

export default Demo;