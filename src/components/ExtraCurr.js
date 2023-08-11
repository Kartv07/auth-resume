import { useState } from "react"

const ExtraCurr = () => {

    const [extra, setExtra] = useState([]);
    const [extraHeading, setExtraHeading] = useState("");
    const [extraSubHeading, setExtraSubHeading] = useState("");
    const [extraDescription, setExtraDescription] = useState("");
    const [extraInput, setExtraInput] = useState(false);
    const [saveDetails, setSaveDetails] = useState(true);



    const handleExtra = () => {
        if (window.confirm("Do you want to save the details ?")) {
            setExtra([...extra, {
                id: Date.now(),
                heading: extraHeading,
                subHeading: extraSubHeading,
                description: extraDescription,
            }])
            setExtraInput(false);
        }
    }

    const handleSave = () => {
        if (extraInput) {
            alert("Please fill the blank details.");
        }
        else {
            setSaveDetails(false);
        }
    }

    return (
        <div className='border-t-2 border-black w-full px-3'>
            <h1 className='flex  justify-between text-lg font-bold'>EXTRACURRICULAR <span>{saveDetails && <button className='mx-3 bg-gray-200 w-[2rem] rounded-lg my-1' onClick={() => { setExtraInput(true) }} >+ </button>}
                {saveDetails && <button className=' mx-3 bg-gray-200 rounded-md p-1 my-1 text-sm' onClick={handleSave}>Save Section</button>}</span> </h1>
            {(extra.length === 0) ? (<h1>I didn't take part at any extracurricular activiy.</h1>) : (<>
                {extra.map((value) => {
                    return (
                        <>
                            <h1 className='text-lg font-semibold'>{value.heading}</h1>
                            <h1 className='text-md'>{value.subHeading}</h1>
                            <h1 className='text-sm w-full'>{value.description}</h1>
                        </>
                    )
                })}
            </>)}

            {extraInput && <div className='my-1 py-1 text-sm'>
                <input onChange={(event) => { setExtraHeading(event.target.value) }} type='text' placeholder='Heading' className='rounded-lg focus:rounded-md focus:bg-blue-100 m-1 px-1 h-6' />
                <input onChange={(event) => { setExtraSubHeading(event.target.value) }} type='text' placeholder='Sub-Heading' className='rounded-lg focus:rounded-md focus:bg-blue-100 m-1 px-1 h-6' />
                <input onChange={(event) => { setExtraDescription(event.target.value) }} type='text' placeholder='Description' className='rounded-lg focus:rounded-md focus:bg-blue-100 m-1 px-1 h-6' />
                <button className=' mx-3 bg-gray-200 rounded-md text-sm p-1 my-1' onClick={handleExtra}>Save</button>
            </div>}
        </div>
    )
}

export default ExtraCurr;