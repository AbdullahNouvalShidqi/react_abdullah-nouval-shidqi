import logoAtas from './asset/img/logo-ALTA@2x.png';
import bootstrap from './asset/css/bootstrap.min.css';
import mainCss from './asset/css/main.css';
import fotoProfil from './asset/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';

function Home() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link href={bootstrap} />
          <link href={mainCss} rel="stylesheet" type="text/css" />
          <title>Beranda</title>
          <header>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                  <div className="alterra">
                    <a href="index.html"><img className="logo-atas" src={logoAtas} alt="logo-atas" /></a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                  {/* <div class="container"> */}
                  <div className="row align-items-center navig">
                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="index.html" className="aktif">HOME</a></div>
                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center"><a href="about.html">ABOUT</a></div>
                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left"><a href="#">EXPERIENCE</a></div>
                    <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="form.html">CONTACT</a></div> 
                  </div>
                  {/* </div> */}
                </div>    
              </div>
            </div> 
          </header>
          <div className="container h-100">
            <div className="row align-items-center isi-home">
              <div className="col-lg-4 col-md-12 col-sm-12  col-12">
                <img id="foto-profil" src={fotoProfil} alt="foto-profil" />
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="main-p">
                  <p className="sapaan">Hi, my name is </p>
                  <p className="nama">Anne Sullivan</p>
                  <p className="hobi">I build things for the web</p>
                  <p className="tombol"><a href="about.html">Get In Touch</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default Home;