// component architecture in react
/*
import Header from './components/header';
import Aside from './components/aside';
import MainContent from './components/mainContent';
import Footer from './components/footer';
import  './App.css';

const App = () => {


  return (
    <div class='main-cont'>
  
        <nav className='my-nav'>
           <Header/>
        </nav>

        <div className='body-cont'>
           <aside className='aside-bar'>
               <Aside/>
           </aside>

           <div className='main-content'>
                <MainContent/>
           </div>
        </div>

        <footer>
          <Footer/>
        </footer>

    </div>
  )
}

export default App;
*/








// react (props)
/*
import Header from './components/header';
import Aside from './components/aside';
import  './App.css';

const App = () => {

  const person = "Harshit"


  return (
     <div className='main-cont'>


        <Header userName = {person} model = "Audi"/>
        <Aside userName = {person}/>


     </div>
   )
  }

export default App;
*/



// react  props using map() method and types.
/*
import Header from './components/header';
import Aside from './components/aside';
import  './App.css';

let personObj = [
  {
    name : "rajesh",
    age : 22,
    id : 1
  },
  {
    name : "ravi",
    age : 43,
    id : 2
  },
  {
    name : "shubham",
    age : 33,
    id : 3
  }
]

const App = () => {


  return (
     <div className='main-cont'>
         
          <ul style={{width:"40%"}}>
            {
              personObj.map( (e)=> <Header key = {e.id} personDetails = {e}/>)
            }
          </ul>

     </div>
   )
  }

export default App;
*/



// react useState
/*
import { useState } from 'react';
import  './App.css';


const App = () => {

const [value,setValue] = useState("App Section");

  const changeHeading = ()=>{
    
    setValue("Change Heading");
    
  }

  return (
     <div className='main-cont'>
         
         <h1> {value} </h1>
         <br /> <br />

         <button onClick={changeHeading} className='btn btn-danger'>Change Heading</button>

     </div>
   )
  }

export default App;
*/





// react Example of increment and decrement using useState.
/*
import Aside from './components/aside';
import { useState } from 'react';
import  './App.css';


const App = () => {

const [allValues,setValues] = useState({

   counter : 0,
   text : "please click on the button"

});


  const IncCounter = ()=>{
    
    setValues( {...allValues, counter : allValues.counter + 1,text : "Increment value"} );
    
  }

  const DecCounter = ()=>{
    
    setValues( {...allValues, counter : allValues.counter - 1,text : "Decrement value"} );
    
  }
 

  return (
     <div className='main-cont'>
         
         {
          allValues.counter > 0 ? <h2 className='text-success'>{allValues.counter}</h2> : <h2 className='text-danger'>{allValues.counter}</h2>
         }
         <br />
         <h3 className='text-primary'> {allValues.text} </h3>
         <br /> 
         <div>
           <button onClick={DecCounter} className='btn btn-danger m-5'>-</button>
           <button onClick={IncCounter} className='btn btn-success'>+</button>
         </div>
         <br /> <br />
         <Aside $counter = {allValues.counter}/>

     </div>
   )
  }

export default App;
*/







// timer application use in useEffect(()=>) clearInterval()
/*
import Aside from './components/aside';
import { useEffect, useState } from 'react';
import  './App.css';


const App = () => {

const [allValues,setValues] = useState({

   counter : 0,
   text : "please click on the button"

});


  const IncCounter = ()=>{
    
    setValues( {...allValues, counter : allValues.counter + 1,text : "Increment value"} );
    
  }

  const DecCounter = ()=>{
    
    setValues( {...allValues, counter : allValues.counter - 1,text : "Decrement value"} );
    
  }

  useEffect(()=>{

    let intervalId = setInterval( ()=>{
      setValues({...allValues,counter : allValues.counter + 1});
 },1000);

 return ()=>{
     clearInterval( intervalId );
 }

  });

 
  return (
     <div className='main-cont'>
         
         <h1>Timer Application</h1>
         <br /> 
         <h1 className='text-danger' style={{fontSize:"50px"}}>{allValues.counter}</h1>
         <br /> 
         <Aside timer = {allValues.counter}/>
     </div>
   )
  }

export default App;
*/









// use in API  GET-(read) method .
/*
import Aside from './components/aside';
import { useEffect, useState } from 'react';
import  './App.css';


const App = () => {

const [allValues,setValues] = useState({

   counter : 0,
   text : ""

});

useEffect(()=>{

  const fetchData = async ()=>{

    let response = await fetch("https://apis.ccbp.in/jokes/random");
  
    let data = await ( response).json();
    
    setValues({...allValues,text : data.value})
  
  }
  
  fetchData();

},[allValues.counter]);


 
  return (
     <div className='main-cont'>
         
         <h1>Timer Application</h1>
         <br /> 
         <h1 className='text-danger' style={{fontSize:"50px"}}>{allValues.counter}</h1>
         <br /> 
         <div>
            <button className='btn btn-danger mr-3' onClick={()=>{setValues({...allValues,counter : allValues.counter - 1})}}> - </button>
            <button className='btn btn-success' onClick={()=>{setValues({...allValues,counter : allValues.counter + 1})}}> + </button>
         </div>

         <h1 className='text-info'>{allValues.text}</h1>
         
     </div>
   )
  }

export default App;
*/






// use in API  POST-(Create),  PUT-(Update), DELETE-(Delete) method .
/*
import Aside from './components/aside';
import { useEffect, useState } from 'react';
import  './App.css';


const App = () => {

const [allValues,setValues] = useState({

   counter : 0,
   text : ""

});


  const fetchData = async()=>{

    const api = "https://gorest.co.in/public/v2/users";

    const userDetails = {
      name: "Rahul Khanna",
      email: "rkhanna@gmail.com",
      gender: "male",
      status: "Inactive"
    }
  
    const option = {
      method : "post",
      headers : {
        "Content-type" : "application/json",
        "Access" : "application/json",
        Authorization : "Bearer 4b518d430adff9c9ad0fd8111f864e869be6428cfb73c5d0a5de4dc7fbcd227c"
      },
      body : JSON.stringify( userDetails )
    }

    const response = await fetch(api,option);
    
    console.log( response );
  
  }


 
  return (
     <div className='main-cont'>
         
         <h1> Post Method </h1>
         <br /> 
         <button className='btn btn-primary' onClick={fetchData}>Fetch</button>
         
     </div>
   )
  }

export default App;
*/



// use in API PUT-(Update) method is incomplet .
/*
import Aside from './components/aside';
import { useEffect, useState } from 'react';
import  './App.css';


const App = () => {

const [allValues,setValues] = useState({

   counter : 0,
   text : ""

});


  const fetchData = async()=>{

    const api = "https://gorest.co.in/public/v2/users";

    const userDetails = {
      name: "Rahul Khanna",
      email: "rkhanna@gmail.com",
      gender: "male",
      status: "Inactive"
    }
  
    const option = {
      method : "post",
      headers : {
        "Content-type" : "application/json",
        "Access" : "application/json",
        Authorization : "Bearer 4b518d430adff9c9ad0fd8111f864e869be6428cfb73c5d0a5de4dc7fbcd227c"
      },
      body : JSON.stringify( userDetails )
    }

    const response = await fetch(api,option);
    
    console.log( response );
  
  }


 
  return (
     <div className='main-cont'>
         
         <h1> Post Method </h1>
         <br /> 
         <button className='btn btn-primary' onClick={fetchData}>Fetch</button>
         
     </div>
   )
  }

export default App;
*/










// use in API create signUp form .
/*
import Aside from './components/aside';
import { useEffect, useState } from 'react';
import './App.css';


const App = () => {

  const [allValues, setValues] = useState({

    name : "",
    email : "",
    gender : "",
    status : "active"

  });


  const fetchData = async (e) => {

    e.preventDefault();
    const {name,gender,email,status} = allValues;

    const api = "https://gorest.co.in/public/v2/users";

    const userDetails = {
      name: name,
      email: email,
      gender: gender,
      status: status,
      errorMsg: ""
    }

    const option = {
      method: "post",
      headers: {
        "Content-type": "application/json",
        "Access": "application/json",
        Authorization: "Bearer 4b518d430adff9c9ad0fd8111f864e869be6428cfb73c5d0a5de4dc7fbcd227c"
      },
      body: JSON.stringify(userDetails)
    };

    const response = await fetch(api, option);
    
    const data = await response.json();

    if( response.ok === true){
      setValues({...allValues,errorMsg : ""});
    }
    else{
      setValues({...allValues,errorMsg : `Email ${data[0].message}`});
    }

    console.log(data);

  };



  return (
    <div className='main-cont'>

      <h1> Signup Form </h1>

      <form onSubmit={fetchData} className="my-form w-50 border border-info p-4">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
           onChange={(e)=>setValues({...allValues,name : e.target.value})} 
           type="text" 
           className="form-control" 
           id="exampleInputEmail1" 
           aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Email</label>
          <input 
           onChange={(e)=>setValues({...allValues,email : e.target.value})}
           type="text" 
           className="form-control" 
           id="exampleInputPassword1" />
        </div>

        <div className="form-group">
          <h5>Gender</h5>
          <label className="mr-2" htmlFor="male">Male</label>
          <input onChange={(e)=>setValues({...allValues,gender : e.target.value})} name="gender" type="radio" value="male" id="male" />

          <label className="mr-2" htmlFor="male">Female</label>
          <input onChange={(e)=>setValues({...allValues,gender : e.target.value})} name="gender" type="radio" value="female" id="female" />
        </div>

        <select onChange={(e)=>setValues({...allValues,status : e.target.value})} name="status" className="form-control">
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <br />
        <button type="submit" className="btn btn-primary btn-block">SignUp</button>

        <h5 className="text-danger mt-2">{allValues.errorMsg}</h5>
      </form>

    </div>
  )
}

export default App;
*/





// <-------- react useRef hook -------->
/*
import { useRef } from "react";
import  './App.css';

const App = ()=> {

const heading = useRef();



const onChangeHeading = ()=>{

  heading.current.textContent = "Heading Changed";
  heading.current.style.color = "red";
}

  return (
    <div className="main-cont">
    
       <h1 ref = {heading}> Hello World </h1>
       <br />
       <button className="btn btn-warning" onClick={onChangeHeading}>Change</button>
    
    </div>
  )
}

export default App;
*/







// <-------- react Custome Hook ----------->
/*
import { useEffect,useRef } from "react";
import  './App.css';
import Aside from "./components/aside";

const App = ()=> {



  return (
    <div className="main-cont">
    
       <Aside/>
    </div>
  )
}

export default App;
*/




// <------------  react Lazy Loading used in load balancer  --------------->
/*
import { useEffect,useRef } from "react";
import { lazy,Suspense } from "react";
import  './App.css';
// import Aside from "./components/aside";
import Footer from "./components/footer";
const Aside = lazy( ()=> import("./components/aside") );

const App = ()=> {



  return (
    <div className="main-cont">
    
       <h1> App Component </h1>
       <br />
       <Suspense fallback = {
        <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
        </div>
      }>

             <Aside/>

       </Suspense>
       <br />
       <Footer/>
    </div>
  )
}

export default App;
*/








import { useEffect,useRef } from "react";
import { lazy,Suspense } from "react";
import  './App.css';
// import Aside from "./components/aside";
import Footer from "./components/footer";
const Aside = lazy( ()=> import("./components/aside") );

const App = ()=> {



  return (
    <div className="main-cont">
    
                <h1>Helo</h1>
       
    </div>
  )
}

export default App;




