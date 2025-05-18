// import React from "react";
// import { FiPlus } from "react-icons/fi";
// import '../styles/_CreateButton.scss'

// const CreateButton = ({ create }) => {
//   return (
//     <div className="create-button">
//       <button>
//         <FiPlus className="plus-icon" /> Create new {create}
//       </button>
//     </div>
//   );
// };

// export default CreateButton;


import React from 'react'
import '../styles/_CreateButton.scss'
import { FiPlus } from 'react-icons/fi';

function CreateButton({ create, onClick }) {
  return (
    <div className="create-button">
      <button onClick={onClick}>
        <FiPlus className="plus-icon" />
        Create new {create}
      </button>
    </div>
  )
}

export default CreateButton;
