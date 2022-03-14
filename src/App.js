import { useState } from 'react';

function App() {

  const openWidget = new URLSearchParams(window.location.search).get("openWidget")?.toLowerCase() === "true";

  const [show] = useState(openWidget);

  return (
    <div className="App">
      <h1>{`param is ${show}`}</h1>
    </div>
  );
}

export default App;
