import { Link } from 'react-router-dom';
import useAuth from '../Hook/useAuth';


const Home = () => {
  const { user,logOut} = useAuth();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-purple-500 text-white">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Welcome {user?.displayName} !</h1>
        {
          user ? (
            <Link
              onClick={logOut}  
              className="bg-white text-blue-500 px-4 py-2 rounded-full mt-4 inline-block"
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="bg-white text-blue-500 px-4 py-2 rounded-full mt-4 inline-block"
            >
              Login
            </Link>
          )
        }
      </header>
      <main className="text-center">
        {
          user?<section className="mb-4">
          <img
            src="https://images.unsplash.com/photo-1583321500900-82807e458f3c?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Beautiful Photo"
            className="rounded-lg shadow-lg max-w-full max-h-96 object-cover"
          />
        </section>:  <p>
          To see the full photo, please{' '}
          <Link
            to="/login"
            className="underline text-blue-200 hover:text-blue-100"
          >
            login
          </Link>
          .
        </p>
        }
        
      
      </main>
    </div>
  );
};

export default Home;
