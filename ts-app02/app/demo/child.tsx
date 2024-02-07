import React,{memo} from 'react'
interface  stateA {
  userInfo:{
    name:string,
    age:number
  };
  name?:string;
  onClick?:Function;
}
const Child:React.FC <stateA>= memo(
    (props:stateA) => {
        const {userInfo}= props
        console.log('渲染child')
      return (
        <div>改变name数值 {userInfo.name} == age:{userInfo.age}</div>
      )
    }
)

export default Child