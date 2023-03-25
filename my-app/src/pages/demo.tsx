import type { Component } from "solid-js";
import Button  from "./../ui/button";
import Card from "./../ui/card";
const Demo: Component = () => {
  let input!: HTMLInputElement;
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
      <Card
        color="brand"
        size="large"
        rounded={false}
      >
        <h1 style={
          {
            display: 'flex',
            "align-items": 'center',
        }}>Card Title</h1>
        <p style={
          {
            display: 'flex',
            "font-size": '20px',
            "align-items": 'center',
          }
        }>
          Hoge HUGA
        </p>
        <ul>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default Demo;