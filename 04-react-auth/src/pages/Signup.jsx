import '@/assets/css/form.css'
import logo from '@/assets/react.svg'

const Signup = () => {
/*
  {
    "first_name": "Danilo",
    "last_name": "Parc",
    "birth_date": "1995-01-23",
    "gender": "M",
    "email": "danylo@gmail.com",
    "password": "gatito123",
    "role":"ADMIN" (OPCIONAL)
  }
*/

  return (
    <main className='form-signin w-100 m-auto'>
      <form>
        <img className='mb-4' src={logo} alt='' width='72' height='57' />
        <h1 className='h3 mb-3 fw-normal'>Please create an account</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='first_name'
            name='first_name'
            placeholder='John'
            value=''
            onChange={() => {}}
          />
          <label htmlFor='first_name'>What's your name?</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='last_name'
            name='last_name'
            placeholder='Doe'
            value=''
            onChange={() => {}}
          />
          <label htmlFor='last_name'>What's your last name?</label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            id='gender'
            name='gender'
            value=''
            onChange={() => {}}
          >
            <option value=''>Choose...</option>
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
          <label htmlFor='gender'>Gender</label>
        </div>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            placeholder='name@example.com'
            value=''
            onChange={() => {}}
          />
          <label htmlFor='email'>Email address</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            placeholder='Password'
            value=''
            onChange={() => {}}
          />
          <label htmlFor='password'>Password</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>
        <p className='mt-5 mb-3 text-muted'>© 2017–2022</p>
      </form>
    </main>
  )
}

export default Signup
