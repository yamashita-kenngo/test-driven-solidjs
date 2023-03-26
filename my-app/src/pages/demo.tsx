import type { Component } from "solid-js";
import Button  from "./../ui/button";
import Card from "./../ui/card";
import Calendar from "../ui/calendar";
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
      <Calendar>
        <caption>2034年4月</caption>
        <thead>
          <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
      </Calendar>
    </div>
  );
};

export default Demo;