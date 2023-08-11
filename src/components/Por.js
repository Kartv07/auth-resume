import { useState } from "react";

const Por = () => {

    const [por, setPor] = useState([{}]);
    const [porHeading, setPorHeading] = useState("");
    const [porSubHeading, setPorSubHeading] = useState("");
    const [porDescription, setPorDescription] = useState("");
    const [saveDetails, setSaveDetails] = useState(true);


    const [porInput, setPorInput] = useState(false);

    const handlePor = () => {
        if (window.confirm("Do you want to save the details ?")) {
            setPor([...por, {
                heading: porHeading,
                subHeading: porSubHeading,
                description: porDescription,
            }])
            setPorInput(false);
        }
    }

    const handleSave = () => {
        if (porInput) {
            alert("Please fill the blank details.");
        }
        else {
            setSaveDetails(false);
        }
    }

    return (
        <div className='border-t-2 border-black w-full px-3 py-2'>
            <h1 className='text-lg flex justify-between font-bold'>POSITION OF RESPONSIBILITY <span>{saveDetails && <button className='mx-3 bg-gray-200 w-[2rem] rounded-lg my-1' onClick={() => { setPorInput(true) }} >+ </button>}
                {saveDetails && <button className=' mx-3 bg-gray-200 rounded-md p-1 my-1 text-sm' onClick={handleSave}>Save Section</button>}</span> </h1>
            {(por.length === 1) ? (<h1 className="text-sm">I don't have any position of responsibility.</h1>) : (<>
                {por.map((value) => {
                    return (
                        <>
                            <h1 className='text-lg font-semibold'>{value.heading}</h1>
                            <h1 className='text-md'>{value.subHeading}</h1>
                            <h1 className='text-sm w-full'>{value.description}</h1>
                        </>
                    )
                })}</>)}

            {porInput && <div className='my-1 py-1 text-sm'>
                <input onChange={(event) => { setPorHeading(event.target.value) }} type='text' placeholder='Heading' className='rounded-lg focus:rounded-md focus:bg-blue-100 m-1 px-1 h-6' />
                <input onChange={(event) => { setPorSubHeading(event.target.value) }} type='text' placeholder='Sub-Heading' className='rounded-lg focus:rounded-md focus:bg-blue-100 m-1 px-1 h-6' />
                <input onChange={(event) => { setPorDescription(event.target.value) }} type='text' placeholder='Description' className='rounded-lg focus:rounded-md focus:bg-blue-100 m-1 px-1 h-6' />
                <button className=' mx-3 bg-gray-200 text-sm rounded-md p-1 my-1' onClick={handlePor}>Save</button>
            </div>}
        </div>
    )
}

export default Por;