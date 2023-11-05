import React from 'react'
import logo from 'assets/icons/logo.png'
import { useNavigate  } from 'react-router-dom';

const UserAuth = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Your login logic here...

        // Redirect to the home screen
        navigate('/modiform/'); // Replace '/home' with the actual path to your home screen
    };

    return (
        <main className='container-fluid m-0 p-5 d-flex justify-content-end align-items-center authElement' >
            <div className='py-5 h-50 d-flex justify-content-center align-items-end col-4'>
                <button id='cust-btn-primary' className='w-100 btn text-uppercase fw-bold p-2' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Login your account</button>
                {/* Modal */}
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden='true'>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header d-flex flex-column">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                <div>
                                    <img src={logo} alt='logo' width={'150px'}/>
                                </div>
                            </div>
                            <div className="modal-body">
                                <form className='p-3 px-5 d-flex flex-column'>
                                    <h3 className='text-uppercase text-center fw-normal'>Login</h3>                            
                                    <div className='d-flex flex-column gap-2'>
                                        <div className='d-flex flex-column w-100'>
                                            <label htmlFor='fName' >Enter your student number</label>
                                            <input type='text' className='p-2 rounded-3' id='fName' placeholder='Enter your student number' required />                        
                                        </div>
                                        <div className='d-flex flex-column w-100'>
                                            <label htmlFor='lName' >Enter your password</label>
                                            <input type='password' className='p-2 rounded-3' id='lName' placeholder='Enter your password' required />                        
                                        </div>
                                    </div>
                                    <div className='w-100 text-end pt-3' style={{fontSize: '0.8rem'}}>
                                        <span style={{color: 'var(--gray'}}>Having trouble logging-in?</span><a href='#a' className='text-decoration-none'> Click here</a>
                                    </div>
                                </form>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button onClick={handleLogin} type="button" data-bs-dismiss="modal" id='log-btn' className="btn w-50 text-uppercase">Login</button>
                            </div>
                            <span className='pt-3 text-center' style={{fontSize: '0.7rem', color: 'var(--dark-gray)'}}>© STI Modiform Group, All Rights Reserved.</span>
                            <hr className='pb-3'/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default UserAuth