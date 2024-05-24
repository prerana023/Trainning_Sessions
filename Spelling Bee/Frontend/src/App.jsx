import { useState, useEffect } from 'react'

function App() {

  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    setCurrentDate(formattedDate);
  }, []);
  return (
    <>
    <div className='flex border-y-2'>
      {/* title */}
      <div className='m-5 p-6'>
        <span className='font-mono font-bold text-3xl mx-4'>Spelling Bee</span>
        <span className='font-mono text-2xl'>{currentDate}</span>
      </div>

      {/* nav bar */}
      <div>
      </div>

      {/* game UI */}
      <div>
        <div></div>
        <div></div>
      </div>

    </div>
    </>
  )
}

export default App
