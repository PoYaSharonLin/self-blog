import Navbar from './navbar'; 
import Home from './home'; 
import './App.css';

function App() {
  // const title = "Sharon's Blog";
  const intro = "Hello, this is Sharon. Welcome to my blog.";
  const link = 'https://drive.google.com/file/d/1N8LCk7EYlz5LD33Peu1yNwyKZLD79euw/view?usp=sharing'
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        {/* <div className="content"></div> = div.content + enter */}
        {/* <h1>{title}</h1> */}
        <Home/>
        <p>{intro}</p>
        <a href = {link}>RESUME </a>
      </div>
      </div>
  );
}

export default App;
