import React, {useState, useEffect}  from 'react'
import { useNavigate  } from 'react-router-dom';
import logo from 'assets/images/yellowed.png'
import bg from 'assets/images/image_61.png'

const AdminAuth = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      name: '',
      password: '',
  });
  const [err1, setErr1] = useState(false)
  const [err2, setErr2] = useState(false)
  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if(formData.name !== '' && formData.password !== '') {
        document.getElementById('login-button').removeAttribute('disabled')
        if(formData.name !== 'modi' || formData.password !== 'form' ){
            document.getElementById('login-button').setAttribute('disabled', 'true')
            setErr1(formData.name !== 'modi')
            setErr2(formData.password !== 'form')
        }else {
            setErr1(false)
            setErr2(false)
        }
    } else {
        document.getElementById('login-button').removeAttribute('disabled')
    }
  }, [formData]);
  
  const handleSubmit = () => {
    alert(formData.name === 'modi' && formData.password === 'form')
    navigate('/admin/dashboard');
  }

  return (
    <main className='h-100 d-flex justify-content-center align-items-center' style={{backgroundColor: 'var(--bright-black)'}}>
      <section className='rounded-3 d-flex'>
        <div className='rounded-2 d-flex justify-content-center align-items-center p-5 backImage' style={{backgroundImage: `url(${bg})`}}>
            <img src={logo} alt='...' width={'150px'} />
        </div>
        <form className='d-flex align-items-start justify-content-center flex-column p-5 gap-3 rounded-3' style={{backgroundColor: 'var(--light-black)'}}>
            <h3 className='fs-2 header'>Login</h3>
            <div className='d-flex flex-column gap-1'>
                <div className='d-flex flex-column '>
                  <label htmlFor='uname'>Username</label>
                  <input type='text' className={`p-2 rounded-2 ${err1 ? 'border-danger' : ''}`} value={formData.name} onChange={handleChange} id='uname' placeholder='Username' name='name'  required />  
                </div>
                <div className='d-flex flex-column'>
                  <label htmlFor='password' >Password</label>
                  <input type='password' className={`p-2 rounded-2 ${err2 ? 'border-danger' : ''}`} id='password' value={formData.password} onChange={handleChange} placeholder='Password' name='password' required />  
                  {err2 ? <span className='error-msg text-danger'>Wrong Password</span> : ''}   
                  {err1 ? <span className='error-msg text-danger'>Wrong Username</span> : ''}                  
                </div>
            </div>
            <div className='mt-5 w-100'>
              <button id='login-button' className='w-100 rounded-2 py-2 text-uppercase text-dark' onClick={handleSubmit}>LogIn</button>
            </div>
        </form>
      </section>
    </main>
  )
}

export default AdminAuth