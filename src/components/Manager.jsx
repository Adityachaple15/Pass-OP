import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Manager = () => {
    const ref = useRef()
    const passwordref = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])
    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }

    }, [])

    const showPassword = () => {
        passwordref.current.type = "text"
        if (ref.current.src.includes("https://cdn.lordicon.com/nqtddedc.json")) {
            ref.current.src = "https://cdn.lordicon.com/ccrgnftl.json"
            passwordref.current.type = "password"
        } else {
            ref.current.src = "https://cdn.lordicon.com/nqtddedc.json"
            passwordref.current.type = "text"
        }

    }

    const savePassword = () => {
        setpasswordArray([...passwordArray, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        console.log(passwordArray)

    }
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (Text) => {
        toast('Copied to Clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"

        });
        navigator.clipboard.writeText(Text)
    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />
            <div className="absolute top-0 -z-10 h-full w-full bg-green-100"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-green-400 opacity-50 blur-[80px]"></div></div>

            <div className="   my-container">
                <h1 className='text-4xl font-bold text-center'><span className='text-green-500 '>&lt;</span>
                    Pass
                    <span className='text-green-500'>OP/&gt;</span></h1>
                <p className='text-green-500 text-lg text-center'>Your Own Password Manager</p>
                <div className=" flex flex-col p-4  text-black gap-6">


                    <input value={form.site} onChange={handleChange} placeholder='Enter Website Url' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='site' id='' />

                    <div className='flex w-full justify-between gap-8'>
                        <input value={form.username} onChange={handleChange} placeholder='Enter username' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='username' id='' />
                        <div className="relative">
                            <input ref={passwordref} value={form.password} onChange={handleChange} placeholder='Enter password' className='rounded-full border border-green-500 w-full p-4 py-1' type="password" name='password' id='' />
                            <span className='absolute right-0 cursor-pointer items-center' onClick={showPassword}>
                                <lord-icon ref={ref}
                                    src="https://cdn.lordicon.com/ccrgnftl.json"
                                    trigger="hover"
                                >
                                </lord-icon>
                            </span>
                        </div>
                    </div>
                </div>
                <button onClick={savePassword} className='mx-auto flex justify-center items-center gap-2 bg-green-400 rounded-full px-5 py-2 border border-green-900 hover:bg-green-300 '>
                    <lord-icon
                        src="https://cdn.lordicon.com/jgnvfzqg.json"
                        trigger="hover"
                    >
                    </lord-icon>
                    Add Password</button>
                <div className="passwords ">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No Passwords to show</div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full rounded-xl overflow-hidden">
                        <thead className='bg-green-800 text-white'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Passwords</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-200'>
                            {passwordArray.map((Item, index) => {

                                return <tr key={index}>
                                    <td className='text-center  justify-center   py-2 border border-white'>
                                        <div className='flex items-center justify-center'>
                                            <a href={Item.site} target='_blank'>{Item.site}</a>

                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(Item.site) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-center  py-2 border border-white '>
                                        <div className='flex items-center justify-center'>
                                            {Item.username}
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(Item.username) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-center  py-2 border border-white'>
                                        <div className='flex items-center justify-center'>
                                            {Item.password}
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(Item.password) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </table>}
                </div>
            </div>


        </>
    )
}

export default Manager