import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/02-useEffect/effects.css';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHooks } from './components/01-useState/CounterWithCustomHooks';
import { ExampleRef } from './components/04-useRef/ExampleRef';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHooks';
// import { HooksApp } from './HooksApp';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ExampleRef />
);

