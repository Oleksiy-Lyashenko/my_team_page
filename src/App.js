import photo1 from './components/assets/photo1.png';
import photo2 from './components/assets/photo2.png';
import photo3 from './components/assets/photo3.png';
import photo4 from './components/assets/photo4.png';
import photo5 from './components/assets/photo5.png';
import photo6 from './components/assets/photo6.png';

function App() {
  return (
    <div className="page">
      <div className="wrapper">
        <div className="top">
          <h1 className="top__title">The creative crew</h1>
          <div className="top-text">
            <h3 className="top-text__title">Who we are</h3>
            <p className="top-text__text">
              We are team of creatively diverse. driven. innovative individuals working in various
              locations from the world.
            </p>
          </div>
        </div>

        <div className="content">
          <div className="photo-block">
            <img src={photo1} alt="" className="photo" />
            <h3 className="photo__name">Bill Mahoney</h3>
            <div className="photo__position">Product owner</div>
          </div>
          <div className="photo-block photo-block--center photo-block--mobile-margin">
            <img src={photo2} alt="" className="photo" />
            <h3 className="photo__name">Bill Mahoney</h3>
            <div className="photo__position">Product owner</div>
          </div>
          <div className="photo-block">
            <img src={photo3} alt="" className="photo" />
            <h3 className="photo__name">Bill Mahoney</h3>
            <div className="photo__position">Product owner</div>
          </div>
          <div className="photo-block photo-block--mobile-margin">
            <img src={photo4} alt="" className="photo" />
            <h3 className="photo__name">Bill Mahoney</h3>
            <div className="photo__position">Product owner</div>
          </div>
          <div className="photo-block photo-block--center">
            <img src={photo5} alt="" className="photo" />
            <h3 className="photo__name">Bill Mahoney</h3>
            <div className="photo__position">Product owner</div>
          </div>
          <div className="photo-block photo-block--mobile-margin">
            <img src={photo6} alt="" className="photo" />
            <h3 className="photo__name">Bill Mahoney</h3>
            <div className="photo__position">Product owner</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
