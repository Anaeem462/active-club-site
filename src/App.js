import './App.css';
import Main from './Component/Main/Main';
import Nav from './Component/Navbar/Nav';
import { ToastContainer, toast } from 'react-toastify';
function App() {
  return (
    <div className="App">
    <Nav></Nav>
      <Main></Main>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
