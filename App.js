import {useState} from "react"
import './App.css';

function App() {
  const [user,setuser]= useState([])
  async function handlesubmit(e){
   e.preventDefault()
   const data= await fetch("https://reqres.in/api/users?page=1")
   const body= await data.json()
   setuser(body.data)
   console.log(body)
  }
  return ( <>
    <section className="section1">
        <div className="container1">
            <form action="" onSubmit={handlesubmit}>
                <v href="#">CLICK HERE TO GET USERS</v>
                <input type="submit" name="submit" value="Get Users" className="btn1"/>
            </form>

            {user.map((us) => (
             <div className="box">
                <div className="box2"> 
                    <img alt="" src={us.avatar} />
                </div>   
                
                <p>{us.first_name}</p>
                <p>{us.last_name}</p>
                <p>{us.email}</p>
            </div> 
            ))}
        </div>
    </section>







    <section className="section2">
        <div className="container2">

        </div>
    </section>



    <section className="section3">
        <div className="container3">
                <div className="footer">
                    <p1>All rights reserved , Designed by <c href="#">Jatin Bhirud</c></p1>
                </div>
        </div>
    </section></>
  );
}

export default App;
