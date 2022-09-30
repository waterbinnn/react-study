import { useState } from "react";
import React from 'react'

function WarnigBanner(props){
    if(!props.warning){
        return null;
    }
    return(
        <div>경고!</div>
    )
}

function MainPage(props) {
    const [showWarning, setShowWarning] = useState(false);

    const handleToggleClick = () => {
        setShowWarning(prevShowWarning => !prevShowWarning)
    }
  return (
    <div>
        <WarnigBanner warning={showWarning} />
        <button onClick={handleToggleClick}>
            {showWarning ? '감추기' : '보이기'}
        </button>
    </div>
  )
}

export default MainPage