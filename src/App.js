import './App.css';

function App() {
  return (
    <div className="card">
        <div className="title">
          <h1 className="bold name">Bulbasaur</h1>
          <h2 className="bold number">#001</h2>
        </div>
        <img className="image" src="" alt=""/>
        <div className="card-content">
        <div class="tags-row">
          <div className="bold tag">
              <p>Grass</p>
          </div>
          <div className="bold tag">
              <p>Poison</p>
          </div>
        </div>
        <a className="bold about" href="/#">About</a>
        <div className="measures-row">
            <p className="weight">6,9 kg</p>
            <p className="height">0,7 m</p>
        </div>
        <div className="description">
            <p>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</p>
        </div>
        </div>
    </div>
  );
}

export default App;
