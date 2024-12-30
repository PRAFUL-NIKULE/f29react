/*
const Aside = ()=> <h1> Aside Component</h1>


export default Aside;
*/



// react (props)
/*
const Aside = (props)=> {
    

    return (

           <h1> {props.userName} </h1>

    )
}


export default Aside;
*/



//   react Example of increment and decrement using useState. 
/*
import Footer from "../footer";
const Aside = (props)=> {

    const {$counter} = props;
    

    return (
         <>
           <h1> This {$counter} is inside Aside component </h1>
           <Footer _counter = {$counter}/>
           <br />
         </>
    )
}


export default Aside;
*/



// timer application use in useEffect(()=>) clearInterval()
/*
import Footer from "../footer";
const Aside = (props)=> {

    const {timer} = props;
    

    return (
         <>
           <h1> This {timer} is inside Aside component </h1>
           <Footer _counter = {timer}/>
           <br />
         </>
    )
}


export default Aside;
*/






// use in API GET-(read) method .
/*
import Footer from "../footer";
const Aside = (props)=> {

    const {timer} = props;
    

    return (
         <>
           <h1> This {timer} is inside Aside component </h1>
           <Footer _counter = {timer}/>
           <br />
         </>
    )
}


export default Aside;
*/






// use in API  POST-(Create)  PUT-(Update), DELETE-(Delete) method .
/*
import Footer from "../footer";
const Aside = (props)=> {

    const {timer} = props;
    

    return (
         <>
           <h1> This {timer} is inside Aside component </h1>
           <Footer _counter = {timer}/>
           <br />
         </>
    )
}


export default Aside;
*/



// <-------- react Custome Hook ----------->
/*
import Footer from "../footer";
import useCounter from "../customeHook/useCounter";

const Aside = ()=> {
    
  const [timer,incTimer,decTimer] = useCounter();

    return (
      <>
        
      <h1>Increment and Decrement</h1>
      <br /><br />
      <h1 style={{fontSize:"70px"}}>{timer}</h1>
      <br /><br />
      <div>
        <button onClick={()=>{decTimer(5)}} className="btn btn-danger mr-4">+</button>
        <button onClick={()=>{incTimer(10)}} className="btn btn-success">-</button>
      </div>

      </>
    )
}

export default Aside;
*/








// <------------  react Lazy Loading used in load balancer  --------------->
/*
import { useState,useEffect } from "react";

const Aside = ()=> {
    
  
  const [name,setName] =  useState("Rajesh");

  useEffect( () => {
    for(let i = 0; i < 1000000000; i++){

      if (i === 999999999){
        setName("Ravi");
      }

    }

  } );

    return (
      
      <>
          

          <h1>{name}</h1>
      </>
    )
}

export default Aside;
*/





import { useState,useEffect } from "react";

const Aside = ()=> {
    
  
  const [name,setName] =  useState("Rajesh");

  useEffect( () => {
    for(let i = 0; i < 1000000000; i++){

      if (i === 999999999){
        setName("Ravi");
      }

    }

  } );

    return (
      
      <>
          

          <h1>{name}</h1>
      </>
    )
}

export default Aside;


