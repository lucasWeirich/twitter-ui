import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../page/Home';
import Tweeter from '../page/Tweeter';
import TemplateDefault from '../templates/Default';

export default function RoutesPage() {
  return <BrowserRouter>
    <Routes>
      <Route
        path='/'
        element={
          <TemplateDefault title='Home'>
            <Home />
          </TemplateDefault>
        }
      />
      <Route
        path='/:id'
        element={
          <TemplateDefault title='Home'>
            <Tweeter />
          </TemplateDefault>
        }
      />
      <Route
        path='/explore'
        element={
          <TemplateDefault title='Explore'>
            <h1>Explore</h1>
          </TemplateDefault>
        }
      />
      <Route
        path='/notifications'
        element={
          <TemplateDefault title='Notifications'>
            <h1>Notifications</h1>
          </TemplateDefault>
        }
      />
      <Route
        path='/messages'
        element={
          <TemplateDefault title='Messages'>
            <h1>Messages</h1>
          </TemplateDefault>
        }
      />
      <Route
        path='/bookmarks'
        element={
          <TemplateDefault title='Bookmarks'>
            <h1>Bookmarks</h1>
          </TemplateDefault>
        }
      />
      <Route
        path='/lists'
        element={
          <TemplateDefault title='Lists'>
            <h1>Lists</h1>
          </TemplateDefault>
        }
      />
      <Route
        path='/profile'
        element={
          <TemplateDefault title='Profile'>
            <h1>Profile</h1>
          </TemplateDefault>
        }
      />
      <Route
        path='/more'
        element={
          <TemplateDefault title='More'>
            <h1>More</h1>
          </TemplateDefault>
        }
      />
      <Route
        path='*'
        element={
          <TemplateDefault title='Not Found'>
            <h1>Not found - 404</h1>
          </TemplateDefault>
        }
      />
    </Routes>
  </BrowserRouter>
}