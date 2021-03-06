import './App.css';
import Clock from './components/clock/Clock';
import Weather from './components/weather/Weather';
import Tabs from './components/tabs/Tabs';
import AutoComplete from './components/auto-complete/AutoComplete';

const names = [
  'Abba',
  'Barney',
  'Barbara',
  'Jeff',
  'Jenny',
  'Sarah',
  'Sally',
  'Xander'
];

const panes = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'Second pane here'},
  {title: 'three', content: 'Third pane here'}
];
function App() {
  return (
    <div className="App">
      <Clock/>
      <Weather />
      <div className="interactive">
        <Tabs panes={panes}/>
        <AutoComplete names={names}/>
      </div>
    </div>
  );
}

export default App;
