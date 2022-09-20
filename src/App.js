import './App.css';
import IncreaseDecrease from './component/increase-decrease/IncreaseDecrease';
import Users from './component/users/Users';


function App() {
  return (
    <div className="App">
      <h1>Facebook Users</h1>
      <IncreaseDecrease></IncreaseDecrease>
      <Users></Users>
    </div>
  );
}

export default App;
