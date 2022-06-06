import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHooks } from './components/01-useState/CounterWithCustomHooks';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHooks';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
//import { HooksApp } from './HooksApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MultipleCustomHooks />
);

