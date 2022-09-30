import React, { useEffect } from 'react'
import { useState } from 'react'
import useCouter from './useCouter';

const MAX_CAPACITY = 10;

function Accomodate(props) {
const [isFull, setIsfull] = useState(false);
const [count, increseCount, decreseCount] = useCouter(0);

useEffect(()=> {
    console.log('==============')
    console.log('useEffect is called.')
    console.log(`isFull:${isFull}`)
})

useEffect(()=> {
    setIsfull(count >= MAX_CAPACITY);
    console.log(`Current count Value: ${count}`)
}, [count])

  return (
    <div style={{padding:16}}>
        <p>{`총 ${count}명 수용했습니다`}</p>

        <button onClick={increseCount} disabled={isFull}>입장</button>
        <button onClick={decreseCount}>퇴장</button>
    </div>
  )
}

export default Accomodate