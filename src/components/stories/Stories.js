import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
import './Stories.css'
import { useEffect, useState } from 'react'


const Stories = () => {

    const [imageElement, setImageElement] = useState([])

    useEffect(() => {
         fetch('imagenes.json')
    .then(res => res.json())
    .then(data => {
          const elements = data.map(item => (
            <div key={item.id} className="col-xxl-3 col-md-6 col-sm-12 p-0 divInfoSeccion2">
            <img src={item.img} alt='' className="w-100 h-100 imgInfoSeccion2"></img>
            <div className='divINDivInfoSeccion2'>
                <div className='divInfoName'>
                    <h5 className='h5InfoSeccion2'>{item.name}</h5>
                    <p className='p1InfoSeccion2'>{item.by}</p>
                </div>
                <div className='d-flex justify-content-between divReadInfo'>
                    <p className='p2InfoSeccion2'>READ STORY</p>
                    <img className='imgFlechaPhotosnap h-50 m-0' src='img/flechaBlanca.png' alt=''></img>
                </div>
            </div>
        </div>
        ));
        setImageElement(elements);
    })
    .catch(err => console.log(err));
}, []);

   

    return (
        <main className='mainStories'>
            <NavBar></NavBar>

            <section className='seccion1Stories'>
                <div>
                    <img className='imgSeccionStories' src='img/montañaAnochecer.png' alt=''></img>
                </div>

                <div className='div2Seccion1Stories'> 
                    <h6 className='h6Seccion1 my-4'>LAST MONTH'S FEATURED STORY</h6>
                    <h1 className='h1Seccion1 my-4'>HAZY FULL MOON OF APPALACHIA</h1>
                    <p className='p1Seccion1 my-4'>March 2nd 2020<span className='spanSeccion1 my-4'>by John Appleseed</span></p>
                    <p className='p2Seccion1 my-4'>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains", especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
                    <p className='p3Seccion1 my-4'>READ THE STORY<img className='imgFlechaPhotosnap h-50 my-4' src='img/flechaBlanca.png' alt=''></img></p>
                                
                </div>
            </section>

            <section className='seccion2Stories'>
                <div className='row'>
                    {imageElement}
                </div>
            </section>

            <Footer></Footer>
        </main>
    )
}

export default Stories