import { useEffect, useState } from 'react';
import './App.css';

const courses = ['HTML', 'CSS', 'JS', 'React'];

const Url = location.search;
const UrlSearch = new URLSearchParams('Url');
const URLSearchParam = UrlSearch.get('setselected' || 0);

function App() {
  const [selected, setselected] = useState(Number(URLSearchParam));

  function handler(index) {
    setselected(index);
    localStorage.setItem('selecetedCourseIndex',index)
    
    const origin = location.origin;
    const searchParams = `?setselected=${index}`
    
    const URL = origin + searchParams;

    location.href = URL
  }
  return (
    <div className="container">
      <nav className="title">
        {courses.map((v, i) => (
          <span
            className={selected === i ? 'active' : ''}
            onClick={() => handler(i)}
          >
            {v}
          </span>
        ))}
      </nav>
      <h4> Course Details </h4>
      <h3 id="detail">You have Selected: {courses[selected]}</h3>
    </div>
  );
}

export default App;
