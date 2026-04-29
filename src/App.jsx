import { useState } from 'react'
import './App.css'
import avatar1 from './assets/avatar1.jpg';
import avatar2 from './assets/avatar2.jpg';
import avatar3 from './assets/avatar3.jpg';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Dashboard from './components/Dashboard/Dashboard';

const employeesData = [
  {
    id: 1,
    name: 'Иван Иванов',
    role: 'Senior DevOps Engineer',
    avatar: avatar1,
    lastActive: '2 часа назад',
    perfomance: 85
  },
  {
    id: 2,
    name: 'Петр Петров',
    role: 'Middle Frontend Developer',
    avatar: avatar2,
    lastActive: '5 минут назад',
    perfomance: 45
  },
  {
    id: 3,
    name: 'Василий Васильев',
    role: 'Junior QA Engineer',
    avatar: avatar3,
    lastActive: '1 день назад',
    perfomance: 72
  }
];

function App() {

  const toggleTheme = () =>{

  };
  const theme = 'dark';

  return (
    <>
      <SideBar theme={theme} />
      <div className='main-content'>
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <Dashboard employees={employeesData} theme={theme} />
      </div>
    </>
  )
}

export default App
