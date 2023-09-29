import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom";
import App from './App.tsx'
import { DashboardProvider } from './context';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <DashboardProvider>
        <App />
      </DashboardProvider>
    </Router>
  </React.StrictMode>
);
