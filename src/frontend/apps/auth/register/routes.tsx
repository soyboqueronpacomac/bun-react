
import '../../../../App.css'
import { useRegisteruserForm } from '../../../hooks/auth/useRegisterUserForm';


export function Register() {
  const {form, handleChange, handleSubmit, message} = useRegisteruserForm();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name='name'
          placeholder='Nombre'
          value={form.name}
          onChange={handleChange} 
        />
      </div>
      <div>
        <input
          type='email'
          name='email'
          placeholder='Correo Electrónico'
          value={form.email}
          onChange={handleChange} 
        />
      </div>
      <div>
        <input
          type='password'
          name='password'
          placeholder='Contraseña'
          value={form.password}
          onChange={handleChange} 
        />
      </div>
      <button type='submit'>Registrarse</button>
      {message && <p>{message}</p>}
    </form>
  )
}


