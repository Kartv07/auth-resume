import { useState } from "react";

const Projects = () => {

    const [projects, setProjects] = useState([{}]);
    const [proHeading, setProHeading] = useState("");
    const [proSubHeading, setProSubHeading] = useState("");
    const [proDescription, setProDescription] = useState("");
    const [proGithub, setProGithub] = useState("");
    const [proLink, setProLink] = useState("");
    const [saveDetails, setSaveDetails] = useState(true);


    const handleProject = () => {
        if (window.confirm("Do you want to save the details ?")) {
            setProjects([...projects, {
                heading: proHeading,
                subHeading: proSubHeading,
                description: proDescription,
                github: proGithub,
                link: proLink,
            }])
            setProInput(false);
        }
    }
    const handleSave = () => {
        if (proInput) {
            alert("Please fill the blank details.");
        }
        else {
            setSaveDetails(false);
        }
    }
    const [proInput, setProInput] = useState(false);


    return (
        <div className='border-t-2 border-black w-full px-3 py-2'>
            <h1 className='text-lg flex justify-between font-bold'>PROJECTS <span>{saveDetails && <button className='mx-3 bg-gray-200 w-[2rem] rounded-lg my-1' onClick={() => { setProInput(true) }} >+ </button>}
                {saveDetails && <button className=' mx-3 bg-gray-200 rounded-md p-1 my-1 text-sm' onClick={handleSave}>Save Section</button>}</span> </h1>
            {(projects.length === 1) ? (<h1 className="text-sm">I don't have any projects.</h1>) : (<>
                {projects.map((value) => {
                    return (
                        <>
                            <div className='flex justify-between'>
                                <h1 className='text-lg font-semibold'>{value.heading}</h1>
                                {value.github && <a href={value.github} alt="git" className='text-sm text-blue-500' >Github</a>}
                            </div>
                            <div className='flex justify-between'>
                                <h1 className='text-md'>{value.subHeading}</h1>
                                {value.link && <a href={value.link} alt="lin" className='text-sm text-blue-500' >Link</a>}

                            </div>
                            <h1 className='text-sm w-auto'>{value.description}</h1>
                        </>
                    )
                })}
            </>)}

            {proInput && <div className='my-1 py-1 text-sm'>
                <input onChange={(event) => { setProHeading(event.target.value) }} type='text' placeholder='Heading' className='rounded-lg focus:rounded-md focus:bg-blue-100 m-1 px-1 h-6' />
                <input onChange={(event) => { setProSubHeading(event.target.value) }} type='text' placeholder='Sub-Heading' className='rounded-lg focus:rounded-md focus:bg-blue-100 m-1 px-1 h-6' />
                <input onChange={(event) => { setProDescription(event.target.value) }} type='text' placeholder='Description' className='rounded-lg focus:rounded-md focus:bg-blue-100 m-1 px-1 h-6' />
                <input onChange={(event) => { setProGithub(event.target.value) }} type='text' placeholder='Github repository' className='rounded-lg focus:rounded-md focus:bg-blue-100 m-1 px-1 h-6' />
                <input onChange={(event) => { setProLink(event.target.value) }} type='text' placeholder='Link' className='rounded-lg focus:rounded-md focus:bg-blue-100 m-1 px-1 h-6' />
                <button className=' mx-3 bg-gray-200 rounded-md text-sm p-1 my-1' onClick={handleProject}>Save</button>
            </div>}
        </div>
    );
}

export default Projects;