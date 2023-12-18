// App.jsx

import Button from './components/Button';
import './App.css';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="container">
      <h1>Welcome to My App</h1>
      <Button type="primary" onClick={handleClick}>
        Click Me
      </Button>
      <Button type="default" onClick={handleClick}>
        Default Button
      </Button>
      <Button type="dashed" onClick={handleClick}>
        Dashed Button
      </Button>
      <Button type="text" onClick={handleClick}>
        Text Button
      </Button>
      <Button type="link" onClick={handleClick}>
        Link Button
      </Button>
    </div>
  );
};

export default App;
