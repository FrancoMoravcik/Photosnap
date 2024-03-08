import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
import './Pricing.css'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Pricing = () => {

    const [price, setPrice] = useState(false)

    const handlePriceChange = () => {
        setPrice(!price)
    }

    return (
        <main className='mainPricing'>

            <NavBar></NavBar>

            <section className='seccion1Features'>

                <div className='divReverse divReversePricing'>
                    <div className="col-xxl-5 col-lg-8 col-md-8 col-sm-12 p-0 div1Seccion1Photosnap div1Seccion1Pricing">
                        <h1 className='h1Div1Seccion1Photosnap'>PRICING</h1>
                        <p className='pDiv1Seccion1Photosnap'>Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.</p>
                    </div>

                    <div className="col-xxl-7 col-lg-4 col-md-4 col-sm-12 p-0 contenedorImagenPhotosnap">
                        <img className='w-100 h-100 imgSeccion1Photosnap imgSeccion1Pricing' src='img/fotografa.webp' alt=''></img>
                    </div>
                </div>

            </section>

            <section className='seccion2Pricing d-flex flex-column align-items-center'>
                <div className='my-5 d-flex align-items-center'>
                    <span className='spanDivSeccion2Pricing'>Monthly</span>
                    <div className="interruptor mx-3">
                        <input onChange={handlePriceChange} type="checkbox" id="interruptor" className="interruptor-checkbox"></input>
                        <label for="interruptor" className="interruptor-label"></label>
                    </div>
                    <span className='spanDivSeccion2Pricing'>Yearly</span>
                </div>

                <div className='row divRow'>

                    <div className='col-xxl-4 col-xl-12 divContainerPrice'>
                        <div className='divPrice'>
                            <div className='div1DivPrice'>
                                <h3 className='h3div1DivPrice'>Basic</h3>
                                <p className='pdiv1DivPrice'>Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
                            </div>
                            <div className='div2DivPrice my-4'>
                                <h2 className='h2div1DivPrice'>${price === false ? '19.00' : '10.00'}</h2>
                                <p className='pdiv1DivPrice'>per month</p>
                            </div>
                        </div>
                        <div className='divBtnPick'>
                            <button className='btnPick'>PICK PLAN</button>
                        </div>
                    </div>

                    <div className='col-xxl-4 col-xl-12 divContainerPrice divMedio'>
                        <div className='divPrice'>
                            <div className='div1DivPrice'>
                                <h3 className='h3div1DivPrice h3Medio'>Pro</h3>
                                <p className='pdiv1DivPrice pMedio'>More advanced features available. Recommended for photography veterans and professionals.</p>
                            </div>
                            <div className='div2DivPrice my-4'>
                                <h2 className='h2div1DivPrice h2Medio'>${price === false ? '39.00' : '25.00'}</h2>
                                <p className='pdiv1DivPrice pMedio'>per month</p>
                            </div>
                        </div>
                        <div className='divBtnPick'>
                            <button className='btnPick btnMedio'>PICK PLAN</button>
                        </div>
                    </div>

                    <div className='col-xxl-4 col-xl-12 divContainerPrice'>
                        <div className='divPrice'>
                            <div className='div1DivPrice'>
                                <h3 className='h3div1DivPrice'>Business</h3>
                                <p className='pdiv1DivPrice'>Additional features available such as more detailed metrics. Recommended for business owners..</p>
                            </div>
                            <div className='div2DivPrice my-4'>
                                <h2 className='h2div1DivPrice'>${price === false ? '99.00' : '70.00'}</h2>
                                <p className='pdiv1DivPrice'>per month</p>
                            </div>
                        </div>
                        <div className='divBtnPick'>
                            <button className='btnPick'>PICK PLAN</button>
                        </div>
                    </div>
                </div>

            </section>





            <section className='seccion3Pricing'>

                <h2 className='h2Seccion3Pricing'>COMPARE</h2>

                <div className='d-flex justify-content-between divANone'>

                    <p className='p1Seccion3Pricing'>THE FEATURES</p>

                    <div className='divNone'>
                        <p className='p2Seccion3Pricing'>BASIC</p>
                        <p className='p2Seccion3Pricing'>PRO</p>
                        <p className='p2Seccion3Pricing'>BUSINESS</p>
                    </div>

                </div>
                <hr className='hrPricing'></hr>

                <div className='divANone2'>
                    <p className='p1Seccion3Pricing'>UNLIMITED STORY POSTING</p>
                    <div className='divNone2'>
                        <p className='p3Seccion3Pricing'>BASIC</p>
                        <p className='p3Seccion3Pricing'>PRO</p>
                        <p className='p3Seccion3Pricing'>BUSINESS</p>
                    </div>
                    <div className='divTildes'>
                        <p className='tildes'><FontAwesomeIcon icon={faCheck}/></p>
                        <p className='tildes'><FontAwesomeIcon icon={faCheck}/></p>
                        <p className='tildes'><FontAwesomeIcon icon={faCheck}/></p>
                    </div>
                </div>
                <hr className='hrPricing2'></hr>
                <div className='divANone2'>
                    <p className='p1Seccion3Pricing'>UNLIMITED PHOTO UPLOAD</p>
                    <div className='divNone2'>
                        <p className='p3Seccion3Pricing'>BASIC</p>
                        <p className='p3Seccion3Pricing'>PRO</p>
                        <p className='p3Seccion3Pricing'>BUSINESS</p>
                    </div>
                    <div className='divTildes'>
                        <p className='tildes'><FontAwesomeIcon icon={faCheck}/></p>
                        <p className='tildes'><FontAwesomeIcon icon={faCheck}/></p>
                        <p className='tildes'><FontAwesomeIcon icon={faCheck}/></p>
                    </div>
                </div>
                <hr className='hrPricing2'></hr>
                <div className='divANone2'>
                    <p className='p1Seccion3Pricing'>EMBEDDING CUSTOM CONTENT</p>
                    <div className='divNone2'>
                        <p className='p3Seccion3Pricing'>BASIC</p>
                        <p className='p3Seccion3Pricing'>PRO</p>
                        <p className='p3Seccion3Pricing'>BUSINESS</p>
                    </div>
                    <div className='divTildes'>
                        <p className='tildes'></p>
                        <p className='tildes'><FontAwesomeIcon icon={faCheck}/></p>
                        <p className='tildes'><FontAwesomeIcon icon={faCheck}/></p>
                    </div>
                </div>
                <hr className='hrPricing2'></hr>
                <div className='divANone2'>
                    <p className='p1Seccion3Pricing'>CUSTOMIZE METADATA</p>
                    <div className='divNone2'>
                        <p className='p3Seccion3Pricing'>BASIC</p>
                        <p className='p3Seccion3Pricing'>PRO</p>
                        <p className='p3Seccion3Pricing'>BUSINESS</p>
                    </div>
                    <div className='divTildes'>
                        <p className='tildes'></p>
                        <p className='tildes'><FontAwesomeIcon icon={faCheck}/></p>
                        <p className='tildes'><FontAwesomeIcon icon={faCheck}/></p>
                    </div>
                </div>
                <hr className='hrPricing2'></hr>
                <div className='divANone2'>
                    <p className='p1Seccion3Pricing'>ADVANCED METRICS</p>
                    <div className='divNone2'>
                        <p className='p3Seccion3Pricing'>BASIC</p>
                        <p className='p3Seccion3Pricing'>PRO</p>
                        <p className='p3Seccion3Pricing'>BUSINESS</p>
                    </div>
                    <div className='divTildes'>
                        <p className='tildes'></p>
                        <p className='tildes'></p>
                        <p className='tildes'><FontAwesomeIcon icon={faCheck}/></p>
                    </div>
                </div> 
                <hr className='hrPricing2'></hr>
                <div className='divANone2'>
                    <p className='p1Seccion3Pricing'>PHOTO DOWNLOADS</p>
                    <div className='divNone2'>
                        <p className='p3Seccion3Pricing'>BASIC</p>
                        <p className='p3Seccion3Pricing'>PRO</p>
                        <p className='p3Seccion3Pricing'>BUSINESS</p>
                    </div>
                    <div className='divTildes'>
                        <p className='tildes'></p>
                        <p className='tildes'></p>
                        <p className='tildes'><FontAwesomeIcon icon={faCheck}/></p>
                    </div>
                </div>
                <hr className='hrPricing2'></hr>
                <div className='divANone2'>
                    <p className='p1Seccion3Pricing'>SEARCH ENGINE INDEXING</p>
                    <div className='divNone2'>
                        <p className='p3Seccion3Pricing'>BASIC</p>
                        <p className='p3Seccion3Pricing'>PRO</p>
                        <p className='p3Seccion3Pricing'>BUSINESS</p>
                    </div>
                    <div className='divTildes'>
                        <p className='tildes'></p>
                        <p className='tildes'></p>
                        <p className='tildes'><FontAwesomeIcon icon={faCheck}/></p>
                    </div>
                </div>
                <hr className='hrPricing2'></hr>
                <div className='divANone2'>
                    <p className='p1Seccion3Pricing'>CUSTOM ANALYTICS
                    </p>
                    <div className='divNone2'>
                        <p className='p3Seccion3Pricing'>BASIC</p>
                        <p className='p3Seccion3Pricing'>PRO</p>
                        <p className='p3Seccion3Pricing'>BUSINESS</p>
                    </div>
                    <div className='divTildes'>
                        <p className='tildes'></p>
                        <p className='tildes'></p>
                        <p className='tildes'><FontAwesomeIcon icon={faCheck}/></p>
                    </div>
                </div>
                <hr className='hrPricing2'></hr>
            </section>







            <section className='seccion3Features'>
                <div className='divSeccion3Features'>
                    <p className='pDiv2Seccion3Features'>WE’RE IN BETA. GET YOUR INVITE TODAY!</p>
                    <button className='btnDiv1Seccion1Photosnap my-3'>GET AN INVITE<img className='imgFlechaPhotosnap' src='img/flechaBlanca.png' alt=''></img></button>
                </div>
            </section>


            <Footer></Footer>
        </main>
    )
}

export default Pricing