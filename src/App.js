import { useEffect, useState } from 'react';
import GoogleButton from 'react-google-button'
import { gapi } from 'gapi-script';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Achivements from './components/Achievements.js';
import TechSkills from './components/TechSkills.js';
import Por from './components/Por.js';
import ExtraCurr from './components/ExtraCurr.js';
import login from './login.jpg';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function App() {

  const [user, setUser] = useState({});
  const [dataBase, setDataBase] = useState([{}]);
  const [show, setShow] = useState(true);
  const [addEmail, setAddEmail] = useState("");
  const [addPass, setAddPass] = useState("");

  const handleLogin = () => {
    console.log(dataBase);
    let val = 0;
    for (let i = 0; i < dataBase.length; i++) {
      if (dataBase[i].email === addEmail) {
        val = 1;
        break;
      }
    }
    if (val === 0) {
      alert("Email doesnt exist !");
    }
    if (val === 1) {
      for (let i = 0; i < dataBase.length; i++) {
        if (dataBase[i].email === addEmail && dataBase[i].pass === addPass) {
          val = 2;
          break;
        }
      }
    }
    if (val === 1) {
      alert("Email or Password is incorrect !");
    }
    else if (val === 2) {
      setUser({ email: addEmail, pass: addPass });
    }

  }
  const handleSignUP = () => {
    let val = 0;
    dataBase.map((value) => {
      if (value.email === addEmail) {
        alert("This Email is already exist !");
        val = 1;
      }
    })

    if (val === 0) {
      setDataBase([...dataBase, { email: addEmail, pass: addPass }]);
      alert("Registered Succesfully");
      setShow(true);
    }
  }

  useEffect(() => {
    // Initialize the gapi object
    gapi.load('auth2', function () {
      gapi.auth2.init({
        client_id: '473394420689-3adj9t1ldud5c5p654f9dn5t3p7fuhc9.apps.googleusercontent.com',
      });
    });
  }, []);

  function handleSignOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      setUser({});
      // Perform any additional actions you need after signing out.
    });
  }

  const handleSignIn = () => {
    const auth2 = gapi.auth2.getAuthInstance();

    auth2.signIn().then(googleUser => {
      const profile = googleUser.getBasicProfile();
      console.log(profile);
      console.log('Logged in as: ' + profile.getName());
      // You can perform additional actions after successful sign-in
      setUser({email:profile.cu, pass:profile.NT});
    });
  }

  const SaveAsPDFHandler = () => {
    const input = document.getElementById("print");
  
    html2canvas(input, { logging: true, letterRendering: 1, useCORS: true }).then(canvas => {
      const imgWidth = 208;
      const imgHeight = (canvas.height / canvas.width) * imgWidth;
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); 
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save("resume.pdf");
    });
  };
  
  console.log(user);
  return (
    <>
      {(Object.keys(user).length === 0) ? (
        <>
          <h1 className='text-4xl text-center rounded-lg mx-80 mt-32 w-auto h-auto text-white py-2 bg-blue-400 my-4 font-serif'>Resume Generator</h1>
        <div className='flex-auto grid grid-cols-2 my-6 border-4 border-blue-600 mx-80 '>
          <img src={login} alt='login' className='flex justify-center items-center my-10' />

          <div className='border-4 border-blue-600 rounded-xl px-3 py-2 h-auto m-10 '>
            <input onChange={(event) => { setAddEmail(event.target.value) }} type='text' name="email" placeholder='Enter your email...' className=' w-full rounded-lg focus:rounded-md focus:bg-blue-100 text-center border-2 my-3 h-8' />
            <input onChange={(event) => { setAddPass(event.target.val) }} type='password' name="password" placeholder='Enter your password...' className='w-full rounded-lg focus:rounded-md focus:bg-blue-100 text-center border-2 my-3 h-8' />
            {(show === true) ? (<div>
              <button onClick={handleLogin} className='w-full font-semibold text-md rounded-lg focus:rounded-md focus:bg-blue-100 text-center border-2 my-3 h-8' >Sign in </button>
              <button onClick={() => { setShow(false) }} className='w-full font-semibold text-md rounded-lg bg-blue-300 font-semibold focus:rounded-md focus:bg-blue-100 text-center border-2 my-3 h-8' >Register new user </button>
              <p className='flex justify-center my-3 h-auto'><GoogleButton onClick={handleSignIn} /></p>
            </div>
            ) : (<div>
              <button onClick={handleSignUP} className='w-full font-semibold text-md rounded-lg focus:rounded-md focus:bg-blue-100 text-center border-2 my-3 h-8' >Sign up </button>
              <button onClick={() => { setShow(true) }} className='w-full font-semibold text-md rounded-lg bg-blue-300 font-semibold focus:rounded-md focus:bg-blue-100 text-center border-2 my-3 h-8' >Already have an account ? </button>
            </div>)}
          </div>

        </div>
        </>
      ) : (
        <div className=' rounded-lg mx-80 my-20 border-4 border-blue-500'>
          <h1 className='text-4xl text-center rounded-lg mx-8 w-auto h-auto text-white py-2 bg-blue-400 my-4 font-serif'>Resume Generator</h1>
          <div className="flex-auto border-4 border-blue-500 m-8 font-serif my-2 py-2 bg-white rounded-lg " id='print'>
            <div className='px-3 items-center w-full grid grid-rows-2 grid-cols-2 flex text-lg text-sm w-full'>
              <span >Name:
                <input type="text" placeholder='Enter Name' className='rounded-lg w-1/2 focus:rounded-md focus:bg-blue-100 mx-1 py-2 px-1 h-6' />
              </span>
              <span >Mail:
                <input type="text" placeholder='Enter mail-id' className='rounded-lg w-1/2 focus:rounded-md focus:bg-blue-100 py-2 mx-1 px-1 h-6' />
              </span>
              <span >Phone:
                <input type="text" placeholder='Phone no.' className='rounded-lg w-1/2 focus:rounded-md focus:bg-blue-100 m-1 py-2 px-1 h-6' />
              </span>
              <span >DoB:
                <input type="date" className=' rounded-lg w-[8rem] focus:rounded-md focus:bg-blue-100 m-1 p-1 h-6 py-2' />
              </span>
              <span >Linkedin:
                <input type="text" placeholder='Github url' className='rounded-lg w-1/2 focus:rounded-md focus:bg-blue-100 m-1 px-1 h-6 py-2' />
              </span>
              <span >Github:
                <input type="text" placeholder='Linkedin url' className='rounded-lg w-1/2 focus:rounded-md focus:bg-blue-100 m-1 px-1 h-6 py-2' />
              </span>
            </div>
            <Experience className="py-2 my-5" />
            <Projects />
            <TechSkills />
            <Achivements />
            <Por />
            <ExtraCurr />

          </div>
          <div className="flex flex-row justify-between">
            <button className="flex rounded-md bg-blue-500 px-4 mx-7 py-2 text-sm text-white shadow-sm hover:bg-blue-600 mb-3" type="submit" onClick={SaveAsPDFHandler}>
              <span className='text-base uppercase'>Download</span>
            </button>
            <button className="flex rounded-md bg-blue-500 px-4 mx-7 py-2 text-sm text-white shadow-sm hover:bg-blue-600 mb-3" type="submit" onClick={handleSignOut} >
              <span className='text-base uppercase'>Sign out</span>
            </button>
            <p className="flex rounded-md h-auto bg-blue-500 px-4 mx-7 py-2 text-sm text-white shadow-sm hover:bg-blue-600 mb-3">User Email : {user.email}</p>
          </div>
        </div>
      )
      }
    </>
  );
}

export default App;
