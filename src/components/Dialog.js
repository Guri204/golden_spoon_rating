import React from 'react';

function Dialog(props) {
  return (
    <div className="dialog">
      <p>Thank you for your feedback!</p>
      <button onClick={props.onClose}>Close</button>
    </div>
  );
}

export default Dialog;