import { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
   let [isloading,setisloading]=useState(false)
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    setisloading(true)
    e.preventDefault();
   try {
     await API.post('/signup', form);
     setisloading(true)
    navigate('/login');
    alert("USER CREATED SUCESSFULLY")
   } catch (error) {
      setisloading(true)
    alert(error)
   }
  };

  return (
      <>
    {isloading?
    ( <div className='h-[85vh] flex justify-center items-center text-4xl font-semibold text-gray-700'><h1>LOADING...</h1></div> )
      :
    (<form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow h-[80vh]">
      <h2 className="text-2xl mb-4">Signup</h2>
      {['name', 'email', 'password'].map((field) => (
        <input
          key={field}
          name={field}
          type={field === 'password' ? 'password' : 'text'}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          className="w-full p-2 mb-4 border rounded"
          onChange={handleChange}
        />
      ))}
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:cursor-pointer">Register</button>
    </form>)}
    </>
  );
}