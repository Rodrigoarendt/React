import logo from './logo.svg';
import './App.css';

function App() {
  const { reverse } = this.state;
    const reverseClass = reverse ? 'reverse' : '',

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

       <button type='button' onClick={(this.handleClick)}
       >Reverse {reverseClass}
        </button>
      </header>
    </div>
  );
}

/*
class App extends Component {
  state = {
    reverse: false,
  };

  handleClick = () => {
    const { reverse } = this.state;
    this.state({ reverse:!reverse })
  };


  render() {
    const { reverse } = this.state;
    const reverseClass = reverse ? 'reverse' : '',

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

         <button type='button' onClick={(this.handleClick)}
         >Reverse {reverseClass}
         </button>
        </header>
      </div>
    );
  }
}
*/

export default App;
