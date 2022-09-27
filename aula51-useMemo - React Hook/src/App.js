import P from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  console.log('Pai renderizou!');

  useEffect(() => {
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  return (
    <div className="App">
      {posts.mpa((post) => {
        return (
          <div key={post.id} className="post">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
