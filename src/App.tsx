import { useState } from 'react';
import Modal from 'react-modal';
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewIngresso } from './components/NewIngresso';

function App() {
  const [isNewEvent, setNewEvent] = useState(false);

  function handleNewEvent(){
      setNewEvent(true)
  }

  function handleCloseEvent(){
      setNewEvent(false)
  }

  return (
    
    <div className="App">
      <Header onOpenNewEvento={handleNewEvent}/>
      <Dashboard />
      <NewIngresso isOpen={isNewEvent} onRequestClose={handleCloseEvent}/>
      <GlobalStyle />
    </div>
  );
}

export default App;
