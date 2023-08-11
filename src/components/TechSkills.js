import { useState } from "react";

const TechSkills = () => {

    const [techSkills, setTechSkills] = useState([]);
    const [addSkill, setAddSkill] = useState("");

    const [techskillInput, setTechSkillInput] = useState(false);
    const [saveDetails, setSaveDetails] = useState(true);


    const handleTechSkills = () => {
        let val = 0;
        techSkills.map((value)=>{
            if(value === addSkill){
                val = 1;
            }
        })
        if(val === 1){
            alert("This skill is already exist !");
        }
        else if (window.confirm("Do you want to save the details ?")) {
            setTechSkills([...techSkills, addSkill]);
            setTechSkillInput(false);
        }
    }

    const handleSave = () => {
        if (techskillInput) {
            alert("Please fill the blank details.");
        }
        else {
            setSaveDetails(false);
        }
    }

    return (

        <div className='border-t-2 border-black w-full px-3 py-2'>
            <h1 className='text-lg flex justify-between font-bold'>TECHNICAL SKILLS <span>{saveDetails && <button className='mx-3 bg-gray-200 w-[2rem] rounded-lg my-1' onClick={() => { setTechSkillInput(true) }} >+ </button>}
                {saveDetails && <button className=' mx-3 bg-gray-200 rounded-md p-1 my-1 text-sm' onClick={handleSave}>Save Section</button>}</span> </h1>
            {(techSkills.length === 0) ? (<h1 className="text-sm">I don't have any technical skills.</h1>) : (<>
                {techSkills.map((value) => {
                    return (
                        <>
                            {(value.length === 1) ? (
                                <span className='text-md font-semibold'>{value}</span>

                            ) : (
                                <span className='text-md font-semibold'>, {value}</span>

                            )}
                        </>
                    )
                })}
            </>)}

            {techskillInput && <div className='my-1 py-1 text-sm'>
                <input onChange={(event) => { setAddSkill(event.target.value) }} type='text' placeholder='Ex: C,C++,etc.' className='rounded-lg focus:rounded-md focus:bg-blue-100 m-1 px-1 h-6' />
                <button className=' mx-3 bg-gray-200 rounded-md p-1 my-1 text-sm' onClick={handleTechSkills}>Save</button>
            </div>}
        </div>
    )
}

export default TechSkills;