import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
import './Photosnap.css'

const Photosnap = () => {

    return (
        <main className='mainPhotosnap'>
            <NavBar></NavBar>


            <section className='seccion1Photosnap'>
                <div className='row'>

                    <div className='divReverse'>
                        <div className="col-xxl-5 col-lg-8 col-md-8 col-sm-12 p-0 div1Seccion1Photosnap">
                            <h2 className='h2Div1Seccion1Photosnap'>CREATE AND SHARE YOUR PHOTO STORIES.</h2>
                            <p className='pDiv1Seccion1Photosnap'>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
                            <div className='w-100 m-1'>
                                <button className='btnDiv1Seccion1Photosnap m-1'>GET AN INVITE<img className='imgFlechaPhotosnap' src='img/flechaBlanca.png' alt=''></img></button>
                            </div>
                        </div>

                        <div className="col-xxl-7 col-lg-4 col-md-4 col-sm-12 p-0 contenedorImagenPhotosnap">
                            <img className='w-100 h-100 imgSeccion1Photosnap' src='img/fotografo1.webp' alt=''></img>
                        </div>
                    </div>


                    <div className="col-xxl-7 col-lg-4 col-md-4 col-sm-12 p-0 contenedorImagenPhotosnap">
                        <img className='w-100 h-100 imgSeccion1Photosnap imgComputadora' src='img/computadora.webp' alt=''></img>
                    </div>

                    <div className="col-xxl-5 col-lg-8 col-md-8 col-sm-12 p-0 div4-5Seccion1Photosnap">
                        <h2 className='h2Div4-5Seccion1Photosnap'>BEAUTIFUL STORIES EVERY TIME</h2>
                        <p className='pDiv4-5Seccion1Photosnap'>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
                        <div className='w-100 m-1'>
                            <button className='btnDiv4-5Seccion1Photosnap m-1'>VIEW THE STORIES<img className='imgFlechaPhotosnap' src='img/flecha.png' alt=''></img></button>
                        </div>
                    </div>

                    <div className='divReverse'>
                        <div className="col-xxl-5 col-lg-8 col-md-8 col-sm-12 p-0 div4-5Seccion1Photosnap">
                            <h2 className='h2Div4-5Seccion1Photosnap'>DESIGNED FOR EVERYONE</h2>
                            <p className='pDiv4-5Seccion1Photosnap'>Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.</p>
                            <div className='w-100 m-1'>
                                <button className='btnDiv4-5Seccion1Photosnap m-1'>VIEW THE STORIES<img className='imgFlechaPhotosnap' src='img/flecha.png' alt=''></img></button>
                            </div>
                        </div>

                        <div className="col-xxl-7 col-lg-4 col-md-4 col-sm-12 p-0 contenedorImagenPhotosnap">
                            <img className='w-100 h-100 imgSeccion1Photosnap' src='img/fotografo2.webp' alt=''></img>
                        </div>
                    </div>
                </div>

            </section>

            <section className="seccion2Photosnap">
                <div className="row">

                    <div className="col-xxl-3 col-md-6 col-sm-12 p-0 divInfoSeccion2">
                        <img src='img/mountains.webp' alt='' className="w-100 h-100 imgInfoSeccion2"></img>
                        <div className='divINDivInfoSeccion2'>
                            <div className='divInfoName'>
                                <h5 className='h5InfoSeccion2'>The Mountains</h5>
                                <p className='p1InfoSeccion2'>by John Appleseed</p>
                            </div>
                            <div className='d-flex justify-content-between divReadInfo'>
                                <p className='p2InfoSeccion2'>READ STORY</p>
                                <img className='imgFlechaPhotosnap h-50 m-0' src='img/flechaBlanca.png' alt=''></img>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-md-6 col-sm-12 p-0 divInfoSeccion2">
                        <img src='img/newyork.webp' alt='' className="w-100 h-100 imgInfoSeccion2"></img>
                        <div className='divINDivInfoSeccion2'>
                            <div className='divInfoName'>
                                <h5 className='h5InfoSeccion2'>Sunset Cityscapes</h5>
                                <p className='p1InfoSeccion2'>by Benjamin Cruz</p>
                            </div>
                            <div className='d-flex justify-content-between divReadInfo'>
                                <p className='p2InfoSeccion2'>READ STORY</p>
                                <img className='imgFlechaPhotosnap h-50 m-0' src='img/flechaBlanca.png' alt=''></img>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-md-6 col-sm-12 p-0 divInfoSeccion2">
                        <img src='img/persona.webp' alt='' className="w-100 h-100 imgInfoSeccion2"></img>
                        <div className='divINDivInfoSeccion2'>
                            <div className='divInfoName'>
                                <h5 className='h5InfoSeccion2'>18 Days Voyage</h5>
                                <p className='p1InfoSeccion2'>by Alexei Borodin</p>
                            </div>
                            <div className='d-flex justify-content-between divReadInfo'>
                                <p className='p2InfoSeccion2'>READ STORY</p>
                                <img className='imgFlechaPhotosnap h-50 m-0' src='img/flechaBlanca.png' alt=''></img>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-md-6 col-sm-12 p-0 divInfoSeccion2">
                        <img src='img/edificio.webp' alt='' className="w-100 h-100 imgInfoSeccion2"></img>
                        <div className='divINDivInfoSeccion2'>
                            <div className='divInfoName'>
                                <h5 className='h5InfoSeccion2'>Architecturals</h5>
                                <p className='p1InfoSeccion2'>by Samantha Brooke</p>
                            </div>
                            <div className='d-flex justify-content-between divReadInfo'>
                                <p className='p2InfoSeccion2'>READ STORY</p>
                                <img className='imgFlechaPhotosnap h-50 m-0' src='img/flechaBlanca.png' alt=''></img>
                            </div>
                        </div>
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
                </div>

            </section>

            <Footer></Footer>
        </main>
    )
}

export default Photosnap