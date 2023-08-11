import { useState } from "react";

const Home = () => {

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [Dob, setDob] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    const [show, setShow] = useState(true);
    const [saveDetails, setSaveDetails] = useState(true);

    const handleSave = () => {
        setSaveDetails(false);
        setShow(false);
    }
    return (
        <>
            <div className='px-3 items-center w-full grid grid-rows-2 grid-cols-2 flex text-lg text-sm w-full'>
                {(show === true) ? (<><span >Name:
                    <input onChange={(e) => { setName(e.target.value) }} type="text" placeholder='Enter Name' className='rounded-lg w-1/2 focus:rounded-md focus:bg-blue-100 mx-1 py-2 px-1 h-6' />
                </span>
                    <span >Mail:
                        <input onChange={(e) => { setMail(e.target.value) }} type="text" placeholder='Enter mail-id' className='rounded-lg w-1/2 focus:rounded-md focus:bg-blue-100 py-2 mx-1 px-1 h-6' />
                    </span>
                    <span >Phone:
                        <input onChange={(e) => { setPhone(e.target.value) }} type="text" placeholder='Phone no.' className='rounded-lg w-1/2 focus:rounded-md focus:bg-blue-100 m-1 py-2 px-1 h-6' />
                    </span>
                    <span >DoB:
                        <input onChange={(e) => { setDob(e.target.value) }} type="date" className=' rounded-lg w-[8rem] focus:rounded-md focus:bg-blue-100 m-1 p-1 h-6 py-2' />
                    </span>
                    <span >Linkedin:
                        <input onChange={(e) => { setLinkedin(e.target.value) }} type="text" placeholder='Github url' className='rounded-lg w-1/2 focus:rounded-md focus:bg-blue-100 m-1 px-1 h-6 py-2' />
                    </span>
                    <span >Github:
                        <input onChange={(e) => { setGithub(e.target.value) }} type="text" placeholder='Linkedin url' className='rounded-lg w-1/2 focus:rounded-md focus:bg-blue-100 m-1 px-1 h-6 py-2' />
                    </span> </>) : (
                    <>
                        <span className="text-lg font-bold font-serif px-1 py-1" >Name: <span className=" px-2 text-sm font-semibold">{name}</span></span>
                        <span className="text-md font-semibold font-serif py-1 " >Mail: <span className=" px-2 text-sm  font-thin">{mail}</span></span>
                        <span className="text-md font-semibold font-serif py-1" >Phone: <span className=" px-2 text-sm font-thin">{phone}</span> </span>
                        <span className="text-md font-semibold font-serif py-1" >DoB: <span className=" px-2 text-sm  font-thin">{Dob}</span></span>
                        <span className="text-md font-semibold font-serif py-1" >Linkedin:<span className=" px-2 text-sm text-blue-500 font-thin">{linkedin}</span></span>
                        <span className="text-md font-semibold font-serif py-1" >Github: <span className=" px-2 text-sm text-blue-500 font-thin">{github}</span></span>
                    </>)}
            </div>

            <h1>{saveDetails && <button className=' mx-3 bg-gray-200 rounded-md p-1 my-1 text-sm' onClick={handleSave}>Save Section</button>} </h1>

        </>
    )
}

export default Home;