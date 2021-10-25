import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  const login = (user) => {
    console.log(user);
  }

  return (
    <div className="App">
      <LoginForm login={login} />
    </div>
  );
}

export default App;
