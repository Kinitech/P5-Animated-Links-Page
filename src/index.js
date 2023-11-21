import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)

const link = String(window.location.href);

// Strip off any query strings
const baseLink = link.split('?')[0];

import './css/skeleton.css'
import './css/normalize.css'
import './css/components.css'
import App from "./App";

root.render(<App/>);

