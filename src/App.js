import './App.css';

function App() {
  return (
    <div className="card">
        <div className="card__header">
          <h2 className="bold card__name">Bulbasaur</h2>
          <span className="bold card__number">#001</span>
        </div>
        <img className="card__image" src="img/bulbasaur.png" alt=""/>
        <div className="card__content">
        <div className="card__tags">
          <div className="bold card__tag bg-grass">
              <span>Grass</span>
          </div>
          <div className="bold card__tag bg-poisson">
              <span>Poison</span>
          </div>
        </div>
        <a className="bold card__about" href="/#">About</a>
        <div className="card__measures">
            <img src="icon/weight_icon.svg" alt="" />
            <span className="weight">6,9 kg <span class="measure__name">Weight</span></span>
            <img src="icon/height_icon.svg" alt="" />
            <span className="height">0,7 m <span class="measure__name">Height</span></span>
        </div>
        <div className="card__description">
            <p>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</p>
        </div>
        </div>
    </div>
  );
}

export default App;
