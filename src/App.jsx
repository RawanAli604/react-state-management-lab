import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { resumeAndPrerenderToNodeStream } from 'react-dom/static'

const App = () => {
  // add use states for each part
 const [team, setTeam] = useState([]);
 const [money, setMoney] = useState(100)
 const [zombieFighters, setZombieFighters] = useState([
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
      ])

 const handleAddFighter = (fighter) => {
  //check if you have enogh money to add the fighter to your team
      if (money < fighter.price) {
      console.log("Not enough money!");
      alert("Not enough money!");
      return;
    }
  // add the fighter to your team
    setTeam([...team, fighter]);
  
  // remove the fighter from the general list so he can't be added again
  // if it's not equal the fighters id add it to the updated list 
    const updatedFighters = zombieFighters.filter((z) => z.id !== fighter.id);
  // set the whole fighters array to the new filtered array
    setZombieFighters(updatedFighters);
  
  //update the money after adding the fighter to your team 
  setMoney((m) => m - fighter.price);

 };

//  exersize 11 
// adding removing fighter from the team function
const handleRemoveFighter = (fighter) => {
  // remove the fighter from your team array
  //first you should add all the other fighters with different ids to a new team array
      const updatedTeam = team.filter((t) => t.id !== fighter.id);
  // next set your state team to the new array
      setTeam(updatedTeam);

  // add back the removed fighter to the full fighters array
      setZombieFighters([...zombieFighters, fighter]);
  
  // update the money 
      setMoney((m) => m + fighter.price);

}

// functions of total team strength and agility
  const totalStrength = team.reduce((sum, fighter) => sum + fighter.strength, 0);
  const totalAgility = team.reduce((sum, fighter) => sum + fighter.agility, 0);

  return (
    <div>
      <h2>Zombie Fighters Team Builder</h2>
      {/* exersize 5 */}
      <h3>Current Money: ${money}</h3>
      {/* exersize 4 */}
      <h2>All available fighters</h2>
    <ul>
 {zombieFighters.map((fighter) => (
            <div key={fighter.id} >
              <img src={fighter.img} alt={fighter.alt} />
              <h4>{fighter.name}</h4>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <p>Price: ${fighter.price}</p>
              <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </div>
          ))}
    </ul>
    
  {/* exersize 7 */}
<h2>Your Team</h2>
  <h4>Total Strength: {totalStrength}</h4>
  <h4>Total Agility: {totalAgility}</h4>
{/* if the length is zero display text otherwise show team members */}
{team.length === 0 ? (
  <p>Pick some team members!</p>
) : (
  <ul>
  {team.map((fighter) => (
    <div key={fighter.id}>
      <img src={fighter.img} alt={fighter.name} />
      <h4>{fighter.name}</h4>
      <p>Strength: {fighter.strength}</p>
      <p>Agility: {fighter.agility}</p>
      <p>Price: ${fighter.price}</p>
      <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
    </div>
  ))}
    </ul>
)}
    </div>
  );
}

export default App
