import { useState } from 'react';
import Modal from 'react-modal';
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

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

      <Modal isOpen={isNewEvent} onRequestClose={handleCloseEvent}>
          <h2>CADASTRAR INGRESSO</h2>
      </Modal>

      <GlobalStyle />
    </div>
    
  );
}

export default App;
