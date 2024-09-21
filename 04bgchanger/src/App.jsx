import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  function changeColor(color){
    setColor(color)

  }

  return (
    <div className='w-full h-screen duration-200 bg-black' style={{backgroundColor: color}}>
      <h1 className='text-3xl mx-56 px-43 text-white'>Welcome to Color Changer</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={() => setColor('blue')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: 'blue'}}>Blue</button>
        <button onClick={() => setColor('purple')}
        className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: 'purple'}}>purple</button>
        <button onClick={() => setColor('green')} 
        className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: 'green'}}>green</button>
        <button onClick={() => setColor('maroon')} 
        className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: 'maroon'}}>maroon</button>
        <button onClick={() => setColor('grey')} 
        className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: 'grey'}}>Grey</button>
        <button onClick={() => setColor('pink')} 
        className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: 'pink'}}>Pink</button>
        <button onClick={() => setColor('orange')} 
        className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: 'orange'}}>orange</button>
        
        </div>
      </div>
    </div>
  )
}

export default App
