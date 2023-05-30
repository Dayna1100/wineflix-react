import React, { useState } from 'react';
import './App.css';

const Wines = () => {
  const [showCompleted, setShowCompleted] = useState(false);

  const handleToggleCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const wines = [
    {
      id: 1,
      imageUrl: '/red-wine.jpg',
      progress: 22,
      label: 'Wine',
    },
    {
      id: 2,
      imageUrl: '/red-wine.jpg',
      progress: 43,
      label: 'Wine',
    },
    {
      id: 3,
      imageUrl: '/red-wine.jpg',
      progress: 75,
      label: 'Wine',
    },
    {
      id: 4,
      imageUrl: '/red-wine.jpg',
      progress: 100,
      label: 'Wine',
    },
    {
      id: 5,
      imageUrl: '/red-wine.jpg',
      progress: 0,
      label: 'Wine',
    },
    {
      id: 6,
      imageUrl: '/red-wine.jpg',
      progress: 60,
      label: 'Wine',
    },
    {
      id: 7,
      imageUrl: '/red-wine.jpg',
      progress: 20,
      label: 'Wine',
    },
    {
      id: 8,
      imageUrl: '/red-wine.jpg',
      progress: 90,
      label: 'Wine',
    },
  ];

  const filteredWines = showCompleted ? wines.filter((wine) => wine.progress === 100) : wines;

  return (
    <div className="wines">
      <h2>Wines</h2>
      <div>
        <label htmlFor="show-completed">Show completed:</label>
        <input
          type="checkbox"
          id="show-completed"
          checked={showCompleted}
          onChange={handleToggleCompleted}
        />
      </div>
      <ul className="wine-list">
        {filteredWines.map((wine) => (
          <li key={wine.id}>
            <div className="wine">
              <img src={wine.imageUrl} alt={wine.label} />
              {wine.progress === 100 && <span className="completed-badge">Completed!</span>}
              <div className="progress-bar">
                <div className="progress" style={{ width: `${wine.progress}%` }} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wines;