import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
import './Features.css'

const Features = () => {
  return (
    <main className='mainFeatures'>
      <NavBar></NavBar>

      <section className='seccion1Features'>

        <div className='divReverse'>
          <div className="col-xxl-5 col-lg-8 col-md-8 col-sm-12 p-0 div1Seccion1Photosnap div1Seccion1Features">
            <h1 className='h1Div1Seccion1Photosnap'>FEATURES</h1>
            <p className='pDiv1Seccion1Photosnap'>We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.</p>
          </div>

          <div className="col-xxl-7 col-lg-4 col-md-4 col-sm-12 p-0 contenedorImagenPhotosnap">
            <img className='w-100 h-100 imgSeccion1Photosnap' src='img/personaCamara.webp' alt=''></img>
          </div>
        </div>

      </section>

      <section className="d-flex flex-column align-items-center">

        <div className="row divSeccion3">
          <div className="col-xxl-4 col-md-12 col-sm-12 d-flex flex-column align-items-center my-5">
            <img src='img/responsive.svg' alt=''></img>
            <h6 className='my-3 h6DivSeccion3'>100% Responsive</h6>
            <p className='text-center px-5 my-3 pDivSeccion3'>No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
          </div>
          <div className="col-xxl-4 col-md-12 col-sm-12 d-flex flex-column align-items-center my-5">
            <img className='imgInfinito' src='img/infinito.svg' alt=''></img>
            <h6 className='my-3 h6DivSeccion3'>No Photo Upload Limit</h6>
            <p className='text-center px-5 my-3 pDivSeccion3'>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
          </div>
          <div className="col-xxl-4 col-md-12 col-sm-12 d-flex flex-column align-items-center my-5">
            <img src='img/redes.svg' alt=''></img>
            <h6 className='my-3 h6DivSeccion3'>Available to Embed</h6>
            <p className='text-center px-5 my-3 pDivSeccion3'>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.</p>
          </div>
          <div className="col-xxl-4 col-md-12 col-sm-12 d-flex flex-column align-items-center my-5">
            <img src='img/www.svg' alt=''></img>
            <h6 className='my-3 h6DivSeccion3'>Custom Domain</h6>
            <p className='text-center px-5 my-3 pDivSeccion3'>With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!</p>
          </div>
          <div className="col-xxl-4 col-md-12 col-sm-12 d-flex flex-column align-items-center my-5">
            <img className='' src='img/manito.svg' alt=''></img>
            <h6 className='my-3 h6DivSeccion3'>Boost Your Exposure</h6>
            <p className='text-center px-5 my-3 pDivSeccion3'>Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.</p>
          </div>
          <div className="col-xxl-4 col-md-12 col-sm-12 d-flex flex-column align-items-center my-5">
            <img src='img/pic.svg' alt=''></img>
            <h6 className='my-3 h6DivSeccion3'>Drag & Drop Image</h6>
            <p className='text-center px-5 my-3 pDivSeccion3'>Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories..</p>
          </div>
        </div>

      </section>


      <section className='seccion3Features'>
        <img className='img-GranCañon' src="img/granCañon.jpg" alt=''></img>
        <div className='divSeccion3Features'>
          <p className='pDiv2Seccion3Features'>WE’RE IN BETA. GET YOUR INVITE TODAY!</p>
          <button className='btnDiv1Seccion1Photosnap my-3'>GET AN INVITE<img className='imgFlechaPhotosnap' src='img/flechaBlanca.png' alt=''></img></button>
        </div>
      </section>

      <Footer></Footer>
    </main>
  )
}

export default Features