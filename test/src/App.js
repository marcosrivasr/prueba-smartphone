
import './App.css';
import {useState} from 'react';

function App() {

  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  function addItem(text){
    const todos = [{text: text}, ...items];
  
    setItems([...todos]);
  }

  function handleChange(e){
    const value = e.target.value;

    setText(value);
  }

  function handleSubmit(e){
    e.preventDefault();
    addItem(text);
  }

  return (
    <div className="App">
      <h1>Todos</h1>

      <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={text} />
      </form>

      <div>
        {
          items.map((item, index) => <li key={index}>{item.text}</li> )
        }
      </div>
    </div>
  );
}

export default App;
