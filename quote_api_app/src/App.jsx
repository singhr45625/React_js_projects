import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch(e) {
      setQuote("Oops! Couldn't fetch a quote. Try again.");
      setAuthor('');
      console.error(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${quote} - ${author}`);
    alert('Quote copied to clipboard!');
  };

  return (
    <div className="app">
      <div className="quote-card">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          <>
            <p className="quote-text">"{quote}"</p>
            <p className="quote-author">— {author}</p>
            <div className="button-container">
              <button onClick={copyToClipboard} className="copy-button">
                Copy Quote
              </button>
              <button onClick={fetchQuote} className="new-quote-button">
                New Quote
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App