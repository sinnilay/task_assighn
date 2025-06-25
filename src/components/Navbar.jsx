import { Link, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../redux/authslice';

export default function Navbar() {
  const navigate = useNavigate()

  const dispatch=useDispatch()
  const islooggedIn=useSelector(state=>state.auth.isloggedIn)
    function handlelogout(){
    dispatch(logout())
    localStorage.removeItem('token');
    navigate('/login')
    console.log(islooggedIn);
    
  
  }
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="font-bold">Task Manager</h1>
    {islooggedIn ?  
       <button onClick={handlelogout} className="mr-4 bg-red-500 px-3 py-1 rounded">
                Logout
      </button>:
        <div>
        <Link to="/login" className="mr-4">Login</Link>
        <Link to="/signup">Signup</Link>
        </div>
      
    }
    </nav>
  );
}