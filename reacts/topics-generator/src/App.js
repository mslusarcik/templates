import './App.css';
import React, { useState } from "react";

const App = () => {
  const [activeTopic, setActiveTopic] = useState(0);

  const topics = [
    { id: 1, group: 'mix', text: 'A funny story' },
    { id: 2, group: 'mix', text: 'A tear-jerking story' },
    { id: 3, group: 'mix', text: 'A cautionary tale' },
    { id: 4, group: 'mix', text: 'The last time when you cried with happiness' },
    { id: 5, group: 'mix', text: 'A victory story' },
    { id: 6, group: 'mix', text: 'A failure story' },
    { id: 7, group: 'mix', text: 'A flashback' },
    { id: 8, group: 'mix', text: 'A story of good deeds' },
    { id: 9, group: 'mix', text: 'An embarrassing story' },
    { id: 10, group: 'mix', text: 'Your weird dream' },
    { id: 11, group: 'mix', text: 'Why are West Africas fish disappearing' },
    { id: 12, group: 'mix', text: 'A good book' },
    { id: 13, group: 'mix', text: 'A nice sitcom' },
    { id: 14, group: 'mix', text: 'A media-finding' },
    { id: 15, group: 'mix', text: 'The best app of the month' },
    { id: 16, group: 'mix', text: 'The best offline event' },
    { id: 17, group: 'mix', text: 'Maybe you have realized a universal truth' },
    { id: 18, group: 'mix', text: 'A divine face mask you tested' },
  ]

  const randomData = (e) => {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * topics.length);
    setActiveTopic(topics[randomNumber].text);
    console.log('this is:', e);
    e.target.innerHTML = "Nelíbí? Zkuste to znovu.";
  }

  return ( 
    <div className="App bg-grey">
      <section className="centered-section">
        <h1 className="h2">Dochází vám nápady na socky?</h1>
        <p>Nechtě mě to vymyslet za vás.</p>
        <div className="container w-100">
          <form className="js-topic-generator">
            <div className="js-place-for-topic">
              <span>{(activeTopic) ? activeTopic : 'O čem dnes budete psát?'}</span>
            </div>
            <button className="btn-add-accordion js-topic-generator-button" onClick={randomData}>Vymyslet téma</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;