import ReactDOM from 'react-dom/client';
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import AmeriCorps from './pages/AmeriCorps.jsx';
import Contact from './pages/Contact.jsx';
import GetInvolved from './pages/GetInvolved.jsx';
import Home from './pages/Home.jsx';
import News from './pages/News.jsx';
import Programs from './pages/Programs.jsx';

import About from './pages/about/About.jsx';
import AboutBoard from './pages/about/AboutBoard.jsx';
import AboutPartners from './pages/about/AboutPartners.jsx';
import AboutStaff from './pages/about/AboutStaff.jsx';
import AboutLayout from './pages/about/Layout.jsx';

import './styles.css';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'programs', element: <Programs /> },
      { path: 'programs/americorps', element: <AmeriCorps /> },
      {
        path: 'about',
        element: <AboutLayout />,
        children: [
          { index: true, element: <About /> },
          { path: 'board', element: <AboutBoard /> },
          { path: 'partners', element: <AboutPartners /> },
          { path: 'staff', element: <AboutStaff /> },
          { path: '*', element: <Navigate to="/about" /> },
        ],
      },
      { path: 'news', element: <News /> },
      { path: 'contact', element: <Contact /> },
      { path: 'get-involved', element: <GetInvolved /> },
      { path: 'services', element: <Programs /> },
      // you can add { path: '*', element: <div>Page not found</div> } if you want
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);