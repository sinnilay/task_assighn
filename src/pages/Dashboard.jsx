import { useEffect, useState } from 'react';
import API from '../api';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  const fetchTasks = async () => {
    const { data } = await API.get('/tasks');
    setTasks(data);
  };

  const addTask = async (e) => {
    e.preventDefault();
    await API.post('/tasks', { title });
    setTitle('');
    fetchTasks();
  };

  const updateStatus = async (id, status) => {
    await API.put(`/tasks/${id}`, { status });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const grouped = {
    'To Do': [],
    'In Progress': [],
    'Done': [],
  };
  tasks.forEach((task) => grouped[task.status].push(task));

  return (
    <div className="p-6 ">
      <h2 className=" mb-4 m-auto flex justify-center text-5xl font-bold ">Your Tasks</h2>
      <div className="mb-6 w-70 m-auto mt-8">
        <form action="" onSubmit={addTask}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter your task.." className="border p-2 mr-2 rounded w-50" required />
        <button  type='submit' className="bg-green-600 text-white px-4 py-2 rounded">Add</button></form>
      </div>
      <div className="grid grid-cols-3 gap-6 bg-green-300 h-[80vh]">
        {Object.keys(grouped).map((status) => (
          <div key={status}>
            <h3 className="font-bold mb-2">{status}</h3>
            {grouped[status].map((task) => (
              <div key={task.id} className="bg-gray-100 p-2 mb-2 rounded">
                <p>{task.title}</p>
                {status !== 'Done' && (
                  <button
                    className="text-sm text-blue-600 mt-1"
                    onClick={() => updateStatus(task.id, status === 'To Do' ? 'In Progress' : 'Done')}
                  >
                    Move to {status === 'To Do' ? 'In Progress' : 'Done'}
                  </button>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
