import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import icon from '../../assets/icon.svg';
import './App.css';

function Hello() {
  const [inputData, setInputData] = useState('');
  const [receivedMessages, setReceivedMessages] = useState<any[]>([]);

  useEffect(() => {
    // Set up listener for messages from main process
    const cleanup = window.electron.ipcRenderer.on('reply-channel', (data) => {
      setReceivedMessages(prev => [...prev, data]);
    });

    return () => {
      cleanup(); // Clean up listener when component unmounts
    };
  }, []);

  const handleClick = () => {
    window.electron.ipcRenderer.sendMessage('test-channel', { message: 'Hello from Renderer!' , data: inputData});
  };

  return (
    <div>
      <div className="Hello">
        {/* <img width="200" alt="icon" src={icon} /> */}
      </div>
      <h1>Hello, you good people</h1>
      We need some output
      <div className="Hello" style={{ display: 'block' }}>
        <div className='input-container'>
          <input type="text" id="input1" onChange={(e) => setInputData(e.target.value)} />
        </div>
        <div className='button-container'>
          <button id="sendBtn" onClick={handleClick}>Send Message</button>
        </div>
        <div className='messages-container'>
          {receivedMessages.map((msg, index) => (
            <div key={index} className="message">
              {msg.message} {msg.date && <span>({msg.date})</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
