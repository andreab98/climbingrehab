import React, { useState } from 'react';
import '../styles/RoundedBox.css';

function RoundedBox({
  title,
  description,
  link
}) {
  const [showDescription, setShowDescription] = useState(false);

  const handleClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="rounded-box">
      <div className="rounded-box-header">
        <h5>{title}</h5>
        <button className="info-button" onClick={handleClick}>
          <i class="bi bi-info-circle"/>
        </button>
      </div>
      {showDescription && <div className="rounded-box-details">{description}</div>}
    </div>
  );
}

export default RoundedBox;
