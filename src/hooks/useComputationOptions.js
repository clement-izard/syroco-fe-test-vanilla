import { useState, useEffect } from 'react';

const useComputationOptions = () => {
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:8080/api/computation-options');
        const data = await response.json();
        setOptions(data);
        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    })();
  }, []);

  return { loading, options };
};

export default useComputationOptions;
