import { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';
import { login } from '../redux/authslice';
export default function Login() {
  let [isloading,setisloading]=useState(false)
  const islooggedIn = useSelector(s=>s.auth.isloggedIn)
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    setisloading(true)
    e.preventDefault();
    const res = await API.post('/login', form);
    console.log(res);
     
    localStorage.setItem('token', res.data.token);
    if(res.status==200)
      
       {
        setisloading(false)
        dispatch(login())
    navigate('/dashboard');}
    console.log(islooggedIn);
    
  };

  return (
    <>
    {isloading?
    ( <div className='h-[85vh] flex justify-center items-center text-4xl font-semibold text-gray-700'><h1>LOADING...</h1></div> )
      :
    (<form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow h-[80vh]">
      <h2 className="text-2xl mb-4">Login</h2>
      <input name="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" onChange={handleChange} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
    </form>)} </>
  );
}