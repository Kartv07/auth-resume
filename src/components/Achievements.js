import { useState } from "react";

const Achievements = () => {

    const [achiInput, setAchiInput] = useState(false);
    const [achivements, setAchivements] = useState([{}]);
    const [achiHeading, setAchiHeading] = useState("");
    const [achiSubHeading, setAchiSubHeading] = useState("");
    const [achiDescription, setAchiDescription] = useState("");
    const [saveDetails, setSaveDetails] = useState(true);


    const handleAchi = () => {
        if (window.confirm("Do you want to save the details ?")) {
            setAchivements([...achivements, {
                heading: achiHeading,
                subHeading: achiSubHeading,
                description: achiDescription,
            }])
            setAchiInput(false);
        }
    }

    const handleSave = () => {
        if (achiInput) {
            alert("Please fill the blank details.")
        }
        else {
            setSaveDetails(false);
        }
    }

    return (
        <div className='border-t-2 border-black w-full px-3 py-2'>
            <h1 className='text-lg flex justify-between font-bold'>ACHIEVEMENTS <span>{saveDetails && <button className='mx-3 bg-gray-200 w-[2rem] rounded-lg my-1' onClick={() => { setAchiInput(true) }} >+ </button>}
                {saveDetails && <button className=' mx-3 bg-gray-200 rounded-md p-1 my-1 text-sm' onClick={handleSave}>Save Section</button>}</span> </h1>
            {(achivements.length === 1) ? (<h1 className="text-sm">I don't have any achievement.</h1>) : (<>
                {achivements.map((value) => {
                    return (
                        <>
                            <h1 className='text-xl font-semibold'>{value.heading}</h1>
                            <h1 className='text-md'>{value.subHeading}</h1>
                            <h1 className='text-sm w-auto'>{value.description}</h1>
                        </>
                    )
                })}
            </>)}

            {achiInput && <div className='my-1 py-1 text-sm'>
                <input onChange={(event) => { setAchiHeading(event.target.value) }} required="required" type='text' placeholder='Heading' className='rounded-lg focus:rounded-md focus:bg-blue-100 m-1 px-1 h-6' />
                <input onChange={(event) => { setAchiSubHeading(event.target.value) }} required="required" type='text' placeholder='Sub-Heading' className='rounded-lg focus:rounded-md focus:bg-blue-100 m-1 px-1 h-6' />
                <input onChange={(event) => { setAchiDescription(event.target.value) }} required="required" type='text' placeholder='Description' className='rounded-lg focus:rounded-md focus:bg-blue-100 m-1 px-1 h-6' />
                <button className=' mx-3 bg-gray-200 rounded-md text-sm p-1 my-1' onClick={handleAchi}>Save</button>
            </div>}
        </div>
    )
}

export default Achievements;