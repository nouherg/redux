
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <h1>TODO APP</h1>
      <TaskList />
      <AddTask />
    </div>
  );
}

export default App;
