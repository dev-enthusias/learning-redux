import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from 'react-router-dom';

import { Navbar } from './app/Navbar';
import PostsList from './features/posts/PostsList';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Navigate to='/' /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

function Home() {
  return (
    <section>
      <h2>Welcome to the Redux Essentials example app!</h2>
      <PostsList />
    </section>
  );
}
