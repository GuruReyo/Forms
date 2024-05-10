import Header from './components/Header.jsx';
// import Login from './components/Login.jsx';
import StateLogin from './components/StateLogin.jsx';
// import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
// import { RouterProvider , createBrowserRouter} from 'react-router-dom';
// Provider from 'react-router-dom';
function App() {
  // const router=createBrowserRouter([
  //   {path:'/',element : <Header />},
  //   {path :'/login',element : <Login />}
  // ])
  return (
    <>
      <Header />
      <main>
        {/* <Login /> */}
        <StateLogin />
        {/* <Signup /> */}
      </main>
    </>
    // <RouterProvider router={router} />
  );
}

export default App;
