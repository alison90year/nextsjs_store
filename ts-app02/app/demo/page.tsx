'use client'
import {useState,useCallback,useMemo} from 'react'
import Child from './child'
// rafce
const page = () => {
    const [count , setCount ] = useState(0)
    // const [ name ,setName] = useState('小明')
    const userInfo = useMemo(() => ({name:'小明',age:18}),[])
    const increment = () => {
        setCount(() => count + 1)
    }
//   const onClick = useCallback((value:string) => {
//     setName(value)
//   },[])
    
  return (
    <div>
        <h1>hooks </h1>
        <button onClick={increment}>点击次数</button>
         <div>{count}</div>
        <Child userInfo={userInfo} />
    </div>
  )
}

export default page