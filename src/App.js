import React, { useCallback, useState } from 'react';

import './App.css';
import useComputationOptions from './hooks/useComputationOptions';
import Modal from "./Components/Modal";
import Button from "./Components/Button";
import Card from "./Components/OptionCard";

function App() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const { loading, options } = useComputationOptions();

  const handleModal = useCallback(
    (newState) => () => {
      setOpenModal(newState);
    },
    [],
  );
  const handleSelectOption = useCallback(
    ({ groupId, id }) =>
      () => {
        if (selectedOptions[groupId] === id) {
          setSelectedOptions(prev => {
            delete prev[groupId];
            return {
              ...prev,
            };
          });
          return;
        }
        setSelectedOptions(prev => {
          return {
            ...prev,
            [groupId]: id,
          };
        });
      },
    [setSelectedOptions, selectedOptions],
  );
  // Feel free to remove the contents of the header tag to make more room for your code
  return (
    <div className="App">
      <Modal open={openModal} onClose={handleModal(false)} selected={selectedOptions} />
      <div className="p-8">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="text-xl mb-8">Efficientship - Computation parameters</div>
            {options?.items?.map(option => (
              <div key={option.id}>
                <div className="text-lg my-6 bg-headerBg p-3">
                  {option.name || option.title || ''}
                </div>
                <div className="flex flex-col sm:flex-row sm:flex-wrap">
                  {option.items?.map(item => (
                    <Card
                      key={item.id}
                      item={item}
                      isSelected={selectedOptions?.[option.id] === item.id}
                      onSelect={handleSelectOption({ groupId: option.id, id: item.id })}
                    />
                  ))}
                </div>
              </div>
            ))}
            {Object.keys(selectedOptions).length === options?.items.length && (
              <Button
                onClick={handleModal(true)}
                className={`mt-6 bg-btnLaunchDefault hover:bg-btnLaunchHover`}
              >
                Launch computation
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
