import { useState } from 'react'; // Import useState to manage state
import Header from './Header';
import Footer from './Footer';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if user is logged in
  const [role, setRole] = useState('guest'); // Track user role (admin, user, guest)
  const [isLoading, setIsLoading] = useState(false); // Simulate loading state
  const [userData, setUserData] = useState(null); // Track fetched user data

  // Simulate login and role selection
  const login = (role) => {
    setIsLoggedIn(true);
    setRole(role);
    setIsLoading(true);
    setTimeout(() => {
      setUserData({ name: 'John Doe', age: 30 }); // Simulate fetching user data
      setIsLoading(false);
    }, 2000); // Simulate 2 seconds loading time
  };

  // Simulate logout
  const logout = () => {
    setIsLoggedIn(false);
    setRole('guest');
    setUserData(null);
  };

  return (
    <div>
      <Header />
      <main>
        {!isLoggedIn ? (
          // Show login options if user is not logged in
          <div>
            <h2>Welcome! Please log in:</h2>
            <button onClick={() => login('admin')}>Login as Admin</button>
            <button onClick={() => login('user')}>Login as User</button>
            <button onClick={() => login('guest')}>Login as Guest</button>
          </div>
        ) : isLoading ? (
          // Show loading state while user data is fetched
          <p>Loading your data...</p>
        ) : (
          // Show dashboard content based on user role
          <div>
            {role === 'admin' && <h2>Admin Dashboard: Full Access</h2>}
            {role === 'user' && <h2>User Dashboard: Limited Access</h2>}
            {role === 'guest' && <h2>Guest Dashboard: Please Log In</h2>}

            {/* Show user info for logged-in users */}
            {userData && role !== 'guest' && (
              <div>
                <p>Name: {userData.name}</p>
                <p>Age: {userData.age}</p>
              </div>
            )}
            
            {/* Logout Button */}
            <button onClick={logout}>Logout</button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
