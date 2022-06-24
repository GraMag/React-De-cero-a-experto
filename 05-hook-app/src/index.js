import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/02-useEffect/effects.css';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHooks } from './components/01-useState/CounterWithCustomHooks';
// import { ExampleRef } from './components/04-useRef/ExampleRef';
// import { Layout } from './components/05-useLayout/Layout';
// import { Memorize } from './components/06-memos/Memorize';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { CallbackHook } from './components/06-memos/CallbackHook';
// import { Padre } from './components/07-tarea-memo/Padre';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHooks';
// import { HooksApp } from './HooksApp';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
import './components/08-useReduce/intro-reducer';
import { TodoApp } from './components/08-useReduce/TodoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TodoApp />
);

