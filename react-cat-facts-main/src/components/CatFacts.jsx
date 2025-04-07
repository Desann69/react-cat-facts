import axios from 'axios';
import { useState } from 'react';
import FactCard from './FactCard';
import ErrorMessage from './ErrorMessage';
import './CatFacts.css';

export default function CatFacts() {
  const [fact, setFact] = useState(null);
  const [error, setError] = useState(null);

  const getFact = async () => {
    try {
      const response = await axios.get('https://catfact.ninja/fact');
      setFact(response.data.fact);
      setError(null);
    } catch (err) {
      setError(err.message);
      setFact(null);
    }
  };

  return (
    <div>
      <button className="get-fact-button" onClick={getFact}>Получить факт</button>
      {fact && <FactCard fact={fact} />}
      {error && <ErrorMessage error={error} />}
    </div>
  );
}
