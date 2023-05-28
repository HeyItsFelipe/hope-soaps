import logo from "./logo.svg";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

function App() {
  const title = "Hope Soaps";

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <NavBar />
      <Banner title={title} />
      <main>
        <section>
          {/* <p>
            Our mission is to trade bad quality soap bars with our all natural
            healing soaps. Each soap is hand crafted with hopeful prayers in the
            background to ensure come to you with our best intentions of
            assisting the healing process of your body.
          </p> */}
          <div style={{'display': 'flex'}}>
            <div style={{'flex': 1}}>
              <img style={{'maxWidth': '100%'}} src="https://images.pexels.com/photos/773252/pexels-photo-773252.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Lemon Grass Soap" />
            </div>
            <div style={{flex: 1}}>
              <h3>Hair Soap</h3>
              <p>Lemon Grass Scented</p>
              <div style={{'display': 'flex'}}>
                <p>$8.00</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
