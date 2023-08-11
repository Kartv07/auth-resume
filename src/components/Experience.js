import { useState } from "react";

const Experience = () => {
  const [sectionOne, setSectionOne] = useState([{}]);
  const [addFormData, setAddFormData] = useState({
    heading: "",
    subHeading: "",
    description: "",
    github: "",
    link: ""
  });

  const [expInput, setExpInput] = useState(false);
  const [saveDetails, setSaveDetails] = useState(true);

  const handleChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const dummyData = { ...addFormData };
    dummyData[fieldName] = fieldValue;

    setAddFormData(dummyData);

  }

  const handleSubmit = () => {

    if (window.confirm("Do you want to save the details ?")) {
      const currVal = {
        id: Date.now(),
        heading: addFormData.heading,
        subHeading: addFormData.subHeading,
        description: addFormData.description,
        github: addFormData.github,
        link: addFormData.link
      }

      setSectionOne([...sectionOne, currVal]);
      setExpInput(false);

      const obj = {
        heading: "",
        subHeading: "",
        description: "",
        github: "",
        link: ""
      }

      setAddFormData(obj);

    }
  }


  const handleSave = () => {
  console.log(sectionOne);

    if (expInput === true) {
      alert("Please fill the blank details.");
    }
    else {
      setSaveDetails(false);
    }
  }

  return (
    <div className='border-t-2 border-black w-full px-3 w-full py-2'>
      <h1 className='text-lg flex justify-between font-bold'>EXPERIENCE <span>{saveDetails && <button className='mx-3 bg-gray-200 w-[2rem] rounded-lg my-1' onClick={() => { setExpInput(true) }} >+ </button>}
        {saveDetails && <button className=' mx-3 bg-gray-200 rounded-md p-1 my-1 text-sm' onClick={handleSave}>Save Section</button>}</span> </h1>
      { 
        (sectionOne.length === 1 ) ? (<div className="text-sm">I dont have any experience.</div>) : (<>
          {sectionOne.map((value) => {
          return (
            <>
              <div className='flex justify-between'>
                <h1 className='text-lg font-semibold'>{value.heading}</h1>
                {value.github && <a href={value.github} className='text-sm text-blue-500' alt="git" >Github</a>}
              </div>
              <div className='flex justify-between'>
                <h1 className='text-md '>{value.subHeading}</h1>
                {value.link && <a href={value.link} alt="lin" className='text-sm text-blue-500' >Link</a>}
  
              </div>
              <h1 className='text-sm w-full'>{value.description}</h1>
            </>
          )
        })} </>)
      }
      

      {expInput && <div className='my-1 py-1 text-sm'>
        <input onChange={handleChange} required="required" type='text' name="heading" placeholder='Heading ' className='rounded-lg focus:rounded-md focus:bg-blue-100 m-1 px-1 h-6' />
        <input onChange={handleChange} type='text' name="subHeading" placeholder='Sub-Heading' className='rounded-lg focus:rounded-md focus:bg-blue-100 m-1 px-1 h-6' />
        <input onChange={handleChange} type='text' name="description" placeholder='Description' className='rounded-lg focus:rounded-md focus:bg-blue-100 m-1 px-1 h-6' />
        <input onChange={handleChange} type='text' name="github" placeholder='Github repository' className='rounded-lg focus:rounded-md focus:bg-blue-100 m-1 px-1 h-6' />
        <input onChange={handleChange} type='text' name="link" placeholder='Link' className='rounded-lg focus:rounded-md focus:bg-blue-100 m-1 px-1 h-6' />
        <button className=' mx-3 bg-gray-200 rounded-md p-1 my-1' onClick={handleSubmit}>Save</button>
      </div>}
    </div>
  )
}

export default Experience;