import './App.css';

function App() {
  return (
    <div className="card">
        <div className="title">
          <h1 className="bold name">Bulbasaur</h1>
          <h2 className="bold number">#001</h2>
        </div>
        <img className="image" src="img/bulbasaur.png" alt=""/>
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
            <img src="icon/weight_icon.svg" alt="" />
            <p className="weight">6,9 kg <span class="measure-name">Weight</span></p>
            <img src="icon/height_icon.svg" alt="" />
            <p className="height">0,7 m <span class="measure-name">Height</span></p>
        </div>
        <div className="description">
            <p>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</p>
        </div>
        </div>
    </div>
  );
}

export default App;
