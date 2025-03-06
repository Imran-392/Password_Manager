import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import {v4 as  uuidv4 } from "uuid";

const notify = () => toast("Text Copied!");

const Manager = () => {
  const ref = useRef();
  const passworRef = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  const getpassword = async ()=>{
    let req = await fetch("http://localhost:3000/")
      let passwords = await req.json()
        setPasswordArray((passwords));
        console.log(passwords)
      }
  

  useEffect(() => {
    getpassword()
  }, []);

  const copyText = (text) => {
    toast("🦄 Copied to clipboard", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,
    });
    navigator.clipboard.writeText(text);
  };

  const showPassword = () => {
    passworRef.current.type = "text";
    if (ref.current.src.includes("icon/eyecross.png")) {
      ref.current.src = "icon/eye.png";
      passworRef.current.type = "password";
    } else {
      ref.current.src = "icon/eyecross.png";
      passworRef.current.type = "text";
    }
  };
  
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  
  const savePassword = async () => {
    if(form.site.length>3 && form.username.length>3 && form.password.length>3){

      await fetch("http://localhost:3000/", {method: "DELETE", headers :{"Content-Type" : "application/json"}, body : JSON.stringify({id: form.id})})
      setPasswordArray([...passwordArray, {...form,id : uuidv4()}]);
    // localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form,id : uuidv4()}]));
    // console.log(...passwordArray, form);
    await fetch("http://localhost:3000/", {method: "POST", headers :{"Content-Type" : "application/json"}, body : JSON.stringify({...form ,id:uuidv4()})})

  setForm({ site: "", username: "", password: "" })
  
  {toast("Password saved", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    // transition: Bounce,
  });
}}
else{
    toast("Password not saved")}
}
  
    const deletePassword = async (id)=>{
      let c = confirm("Do you really want to delete this password?")
      if(c){
        setPasswordArray(passwordArray.filter(item=>item.id!=id));
        // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!=id)));
        let res = await fetch("http://localhost:3000/", {method: "DELETE", headers :{"Content-Type" : "application/json"}, body : JSON.stringify({id})})
        toast("Password deleted", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          // transition: Bounce,
        });
      }
    }

    const editPassword = (id)=>{
      console.log("editing...",id)
      setForm({...passwordArray.filter(i=>i.id===id)[0], id:id})
      setPasswordArray(passwordArray.filter(i=>i.id!=id))
      // console.log(passwordArray)
    }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        // transition={Bounce}
      />
      <div className="px-70 py-16 mx-auto min-h-[88.2vh]">
        <h1 className="text-4xl text font-bold text-center">
          <span className="text-green-700">&lt; </span>
          Pass<span className="text-green-700">OP</span>
          <span className="text-green-700">/ &gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your own password manager
        </p>
        <div className="flex flex-col items-center p-4 text-black gap-8">
          <input
            value={form.site}
            onChange={handleChange}
            name="site"
            type="text"
            placeholder="Enter Website URL"
            className="rounded-full border border-green-500 w-full p-4 py-1"
          />
          <div className="flex w-full justify-between gap-8">
            <input
              placeholder="Enter Username"
              value={form.username}
              onChange={handleChange}
              name="username"
              className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
            />
            <div className="relative flex items-center">
              <input
                ref={passworRef}
                placeholder="Enter Password"
                value={form.password}
                onChange={handleChange}
                name="password"
                className="rounded-full border border-green-500 w-full p-4 py-1"
                type="password"
              />
              <span
                onClick={showPassword}
                className="absolute right-0 cursor-pointer"
              >
                <img ref={ref} src="icon/eye.png" width={30} className="px-1" />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="cursor-pointer flex justify-center items-center gap-2 hover:bg-green-300 bg-green-500 rounded-full w-fit px-5 py-1"
          >
            <lord-icon
              src="https://cdn.lordicon.com/sbnjyzil.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#242424,secondary:#242424"
              //   style="width:250px;height:250px"
            ></lord-icon>
            Save Password
          </button>
        </div>
        <div>
          <h1 className="text-2xl font-bold py-4">Your Passwords</h1>
          {passwordArray.length === 0 && <div>No password to show</div>}
          {passwordArray.length !== 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className="bg-green-700 font-bold text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Action</th>
                </tr>
              </thead>
              <tbody className="bg-green-100 text-center py-1">
                {passwordArray.map((items, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center w-32 py-2 border-white border-1 ">
                        <a href={items.site} target="_blank">
                          {items.site}
                        </a>

                        <span
                          className="cursor-pointer"
                          onClick={() => {
                            copyText(items.site);
                          }}
                        >
                           <lord-icon
                            src="https://cdn.lordicon.com/depeqmsz.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#242424"
                            style={{
                              width: "18px",
                              height: "18px",
                              padding: "3px",
                            }}
                          ></lord-icon>
                        </span>
                      </td>
                      <td className="w-25 py-2 border-white border-1">
                        {items.username}
                        <span
                          className="cursor-pointer"
                          onClick={() => {
                            copyText(items.username);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/depeqmsz.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#242424"
                            style={{
                              width: "18px",
                              height: "18px",
                              padding: "3px",
                            }}
                          ></lord-icon>
                        </span>
                      </td>
                      <td className="w-25 py-2 border-white border-1">
                        {"*".repeat(items.password.length)}
                        <span
                          className="cursor-pointer"
                          onClick={() => {
                            copyText(items.password);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/depeqmsz.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#242424"
                            style={{
                              width: "18px",
                              height: "18px",
                              padding: "3px",
                            }}
                          ></lord-icon>
                        </span>
                      </td>
                      <td className="w-15 py-2 border-white border-1">
                        <span className="mx-1 cursor-pointer" onClick={()=>{editPassword(items.id)}} >
                          <lord-icon
                            src="https://cdn.lordicon.com/wkvacbiw.json" 
                            trigger="hover"
                            stroke="bold"
                            colors="primary:#121331,secondary:#242424"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                        <span className="mx-1 cursor-pointer" onClick={()=>{deletePassword(items.id)}} >
                          <lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                            stroke="bold"
                            colors="primary:#121331,secondary:#242424"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
