import React, {useState, useEffect} from 'react'
import bg2 from 'assets/imges/BE_FUTURE-READY_BE_STI_3.png'
import { ItemGallery, AddToCartModal } from 'Components' 

const OtherShop = () => {
    const [Wear, setWear] = useState(null)
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://modiform-api.vercel.app/api/products');
                const json = await response.json();
                console.log(json)
                if (response.ok) {
                    setWear(json);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } 
        }
        fetchProducts()
    }, [])
    const [category, setCategory] = useState('men')    

    return (
        <>
            <main className='mt-5 h-100'>
                <section className='collegeBanner3 d-flex justify-content-center position-relative'>
                    <img src={bg2} width={'100%'} alt='college' className=' position-relative' />
                    <div className='filt h-100 w-100 z-2 position-absolute top-0 left-0' />
                </section>
                <section className='p-5 h-100 '>  
                    <div className='gap-5 ms-5 d-flex'>
                        <button className={`text-uppercase rounded-1 px-4 py-1 fs-5 ${ category === 'men' ? 'bg-college text-light' : 'bg-college2' }`} onClick={() => setCategory('men')} > Men </button>
                        <button className={`text-uppercase rounded-1 px-4 py-1 fs-5 ${ category === 'women' ? 'bg-college text-light' : 'bg-college2' }`} onClick={() => setCategory('women')} > Women </button>
                    </div>
                    <div className='list-section d-flex flex-column py-5 z-0'>
                        <ItemGallery title={'Others'} category={'Others'} subCategory={'Others'} items={Wear} />
                    </div>
                </section>
            </main>
            <AddToCartModal />
        </>
    )
}

export default OtherShop