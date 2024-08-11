
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>DogUtils</h1>
      <nav>
        <ul>
          <li><Link to="/text-utils">Текстовые Утилиты</Link></li>
          <li><Link to="/calendar">Календарь</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
