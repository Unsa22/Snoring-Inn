import { useState } from "react";

function SignUp(){
    const[name,setName]=useState('');
    const[password,setPassword]=useState('');
    const handleChange=(e)=>{
        setName(e.target.value)
    }
    const handleChangePass=(e)=>{
        setPassword(e.target.value)
    }
const handleSubmit=()=>{
    fetch('http://localhost:5000/api/admin/makeadmin', {
        method: 'POST',
        body: JSON.stringify({
          admin_name:name,
          admin_password:password
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            // Handle data
         })
         .catch((err) => {
            console.log(err.message);
         });
}

return (
    <form>
        <div>
            <label>Admin Name:</label>
        <input placeholder="admin name" value={name}
        onChange={(e)=>handleChange(e)}/>

            </div>

           



<div>
<label> password:</label>
<input placeholder="enter password" value={password}
        onChange={(e)=>handleChangePass(e)}/>
    </div>
    <div>
        <button onClick={()=>handleSubmit()}> login</button>
    </div>
    </form>
);

}export default SignUp;