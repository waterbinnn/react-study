import React from 'react'
import { useState } from 'react'


function useCouter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const increseCount = () => setCount((count) => count+1)
    const decreseCount = () => setCount((count) => Math.max(count - 1,0))

  return [count, increseCount, decreseCount]
}

export default useCouter