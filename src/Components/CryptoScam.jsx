import { React, useState, useEffect } from "react";

const CryptoScam = () => {
  const [scamList, setScamList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getScams = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://api.cryptoscamdb.org/v1/featured"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        setScamList(json.result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getScams().catch(console.error);
  }, []);

  return (
    <div>
      <h3>Crypto Scams</h3>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {scamList && (
        <ul className="side-list">
          {scamList.map((scam) => (
            <li key={scam.name}>{scam.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CryptoScam;
