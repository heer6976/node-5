import React, { useState } from "react";


export default function Form() {

    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[show,setShow] = useState(null);
    const[check,setCheck] = useState(false);
    const[gender,setGender] = useState("");
    const[img,setImg] = useState(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        // console.log(name,email,password);
        console.log(`Name :  ${name}`);
        console.log(`Email :  ${email}`);
        console.log(`Password : ${password}`);
        console.log(`Gender : ${gender}`);
        console.log(`Image : ${img}`);
        if(check) {
            setShow
            console.log("Checked")
        }
        else{
            alert("Please Check Our Terms & Conditions Box")
        }

        setShow(name,email,password,check,gender,img);
    }
    const handleFileChange = (e) => {
        const storedData = e.target.files[0];
        setImg(storedData)
    };

    return(
        <div className="ForDisplay">
                <div>
            <form action="" onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Enter Your Name" value={name} 
                onChange={(e)=>setName(e.target.value)}/>
                <br /> 
                <br />
                <input type="email" placeholder="Enter Your Email" value={email} 
                onChange={(e)=>setEmail(e.target.value)} />
                <br />
                <br />
                <input type="password" placeholder="Enter Your Password" value={password} 
                onChange={(e)=>setPassword(e.target.value)} />
                <br />
                <br />
                <input type="radio" name="gender" id="male" value="Male" 
                onChange={(e)=> setGender(e.target.value)} />
                <label htmlFor="male">Male</label>

                <input type="radio" name="gender" id="female" value="Female" 
                onChange={(e)=> setGender(e.target.value)} />
                <label htmlFor="female">Female</label>

                <input type="radio" name="gender" id="other" value="Other" 
                onChange={(e)=> setGender(e.target.value)} />
                <label htmlFor="other">Other</label>
                <br /> 
                <br />
                <h2>Upload Images Only</h2>
                <br />
                <input type="file" accept="" 
                onChange={handleFileChange} />
                <br />
                <br />
                <h2>Upload PDFs Only</h2>
                <br />
                <input type="file" accept="" 
                onChange={handleFileChange} />
                <br />
                <br />
                <input type="checkbox" id="check" checked={check} 
                onChange={(e)=>setCheck(e.target.checked)}/>
                <label htmlFor="check">Terms And Conditions Apply</label>
                <br />
                <br />
                <input type="submit" value="Submit" />
                <br />
                <br />
            </form>
            </div>

                <div className="ForH3tags">
                {
                    show !== null ? (
                        <>
                            <h3>Name : {name}</h3>
                            <br />
                            <h3>Email : {email}</h3>
                            <br />
                            <h3>Password : {password}</h3>
                            <br />
                            <h3>Gender : {gender}</h3>
                            <br />
                            <img src={URL.createObjectURL(img)} alt="" />
                            <br /> <br />
                            <iframe src={URL.createObjectURL(img)} frameborder="0" width="350px" height="500px"></iframe>
                        </>
                    ) : (
                        "No Data"
                    )
                }
                </div>
        </div>
    )
}