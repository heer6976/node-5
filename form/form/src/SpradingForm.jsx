import { useEffect, useState } from "react";
import './App.css';

export default function Form() {
  const [input, setInput] = useState({
    name: "",
    father: "",
    mother: "",
    password: "",
    email: "",
    phone: "",
    gender: "",
    check: false,
    img: null,
    show: false
  });

    const [item , setItem] = useState(() => {
    const storeData = localStorage.getItem("data");
    return storeData ? JSON.parse(storeData) : [];
  });

  const handleForm = (e) => {
    e.preventDefault();

    console.log(`Name: ${input.name}`);
    console.log(`Father's Name: ${input.father}`);
    console.log(`Mother's Name: ${input.mother}`);
    console.log(`Email: ${input.email}`);
    console.log(`Phone Number: ${input.phone}`);
    console.log(`Password: ${input.password}`);
    console.log(`Gender: ${input.gender}`);
    console.log(`Image: ${input.img ? input.img.name : "No file uploaded"}`);

    if (input.check) {
      console.log("Checked");
      setInput({ ...input, show: true }); 
    } else {
      alert("Please check our Terms & Conditions checkbox");
    }
    // e.target.reset();
    setInput({
        name: "",
        father: "",
        mother: "",
        email: "",
        phone: "",
        password: "",
        gender: "",
        check: false,  
        img: null,  
        show: false  
    });
    setItem([...item,input]);
  };

  const handleFileChange = (e) => {
    const storedData = e.target.files[0];
    if (storedData) {
      setInput({ ...input, img: storedData });
    }
  };

  const handleCheckboxChange = (e) => {
    setInput({ ...input, check: e.target.checked });
  };

  useEffect(()=> {
    localStorage.setItem("data", JSON.stringify(item));
  },[item]);

  const deleteData = (index) => {
    const updateData = item.filter((_,i) => i !== index);
    setItem(updateData);
    localStorage.setItem("data",JSON.stringify(updateData));
  };
  
  const [edit,setEdit] = useState(null);

  const editData = (index) => {
    setEdit(index);
    setInput(item[index]);
  };

  const handleUpdate = () => {
    const updateData = [...item];
    updateData[edit] = input;
    setItem(updateData);
    setInput({
      name : "",
      father : "",
      mother: "",
      email: "",
      password: "",
      phone: "",
      gender: "",
      check: false,  
      img: null,  
      show: false
    });
    setEdit(null);
  };

  return (
    <div className="ForForms">
      <br /> <br />
      <h2 className="ForHeading">Fill The Form</h2>
      <br />
      <hr />
      <br />
      <br />
      <form>
    <div className="ForDisFlex">
     <div className="ForDisFlex">
      <div>
      <h4>Enter Your Full Name :</h4>
      </div>
      <div>
        <input
          type="text"
          value={input.name}
          placeholder="Enter Your Name"
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
      </div>  
      </div>
      <br />
      <br />
      <div className="ForDisFlex">
        <div>
        <h4>Enter Your Father's Full Name :</h4> <br />
        </div>
        <div>
        <input
          type="text"
          value={input.father}
          placeholder="Enter Your Father's Name"
          onChange={(e) => setInput({ ...input, father: e.target.value })}
        />
        </div>
      </div>
    </div>  
        <br />
        <br />
        <div className="ForDisFlex">
          <div className="ForDisFlex">
          <h4>Enter Your Mother's Name :</h4> <br />
          </div>
          <div>
          <input
          type="text"
          value={input.mother}
          placeholder="Enter Your Mother's Name"
          onChange={(e) => setInput({ ...input, mother: e.target.value })}
        />
        </div>
        <br />
        <br />
      <div className="ForDisFlex">
        <h4>Enter Your Email Address :</h4>
      </div>
      <div>
        <input
          type="email"
          value={input.email}
          placeholder="Enter Your Mail"
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
        </div>
        </div>
        <br />
        <br />

      <div className="ForDisFlex">
      <div className="ForDisFlex">
        <h4>Enter Your Phone Number :</h4> <br />
      </div>
      <div>  
          <input  
            type="text"   
            value={input.phone}  
            placeholder="Enter Your Phone Number"  
            onChange={(e) => setInput({ ...input, phone: e.target.value })}  
          />  
        </div>
        <br />
        <br />
      <div className="ForDisFlex">
        <h4>Enter Your Password :</h4>
      </div>
      <div>
        <input
          type="password"
          value={input.password}
          placeholder="Enter Your Password"
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        </div>
        </div>
        <br />
        <br />
        <div className="ForDisFlex">
        <div className="ForDisFlex">
        <div className="ForDisFlex">
        <h4>Select Your Gender :</h4> <br />
        </div>
        <div>
        <input
          type="radio"
          name="gender"
          id="male"
          value="Male"
          onChange={(e) => setInput({ ...input, gender: e.target.value })}
        />
        <label htmlFor="male">Male</label>
        </div>
      <div>
        <input
          type="radio"
          name="gender"
          id="female"
          value="Female"
          onChange={(e) => setInput({ ...input, gender: e.target.value })}
        />
        <label htmlFor="female">Female</label>
        </div>
        </div>
        <br />
        <br />
        <div className="ForDisFlex">
        <h4>Select Your File :</h4> <br />
        </div>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
        <br />
        <br />

        <div className="ForChekBox">
        <div className="ForDisFlex">
          <h4>Select Terms & Conditions Box :</h4> <br /> 
        </div>
        <div>
        <input
          type="checkbox"
          id="check"
          checked={input.check}
          value={input.check}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="check">Terms & Conditions Apply</label>
        </div>
        </div>
        <br />
        <br />
        {
            edit === null ? <button onClick={handleForm} className="ForBTN">Submit</button> : 
            <button onClick={handleUpdate} className="ForBTN">Update</button>
        }
        <br />
        <br />
      </form>
    {
      item.length > 0 &&
      <table border={2} >
        <thead>
            <tr>
                <td>Sr No</td>
                <td>Name</td>
                <td>Father's Name</td>
                <td>Mother's Name</td>
                <td>Email ID</td>
                <td>Phone Number</td>
                <td>Password</td>
                <td>Gender</td>
                <td>Actions</td>
            </tr>
        </thead>

        <tbody>
            {
                item.map((ele,index) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{ele.name}</td>
                        <td>{ele.father}</td>
                        <td>{ele.mother}</td>
                        <td>{ele.email}</td>
                        <td>{ele.phone}</td>
                        <td>{ele.password}</td>
                        <td>{ele.gender}</td>
                        <td>
                            <button onClick={()=>editData(index)} className="ForEditBTN">Edit</button>
                            <button onClick={()=>deleteData(index)} className="ForDelBTN">Delete</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    }  
    </div>
  );
};
