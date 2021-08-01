import { useState } from 'react';

const Home = () => {
  // variable and setter
  const [name, setName] = useState('rendo');
  const [age, setAge] = useState(10);

  const handleClick = () => {
    setName('odner')
    setAge(20)
  }

  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
   );
}
 
export default Home;