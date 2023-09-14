import React from 'react'
import bg2 from 'assets/imges/bg2.png'
import { SliderWrapper, AddToCartModal } from 'Components' 

import imgITfront from 'assets/imges/ITPOLO2.png'
import imgITback from 'assets/imges/ITPOLO.png'
import pantsITfront from 'assets/imges/pantsITfront.png'
import pantsITback from 'assets/imges/pantsITback.png'

import poloTm from 'assets/imges/tmPolo.png'
import pantsTM from 'assets/imges/tmPants.png'
import blazerTM from 'assets/imges/blazer.png'
import tie from 'assets/imges/tie.png'

import poloHM from 'assets/imges/hmPolo.png'
import pantsHM from 'assets/imges/HMPants.png'
import blazerHM from 'assets/imges/HMBlazer.png'
import chef from 'assets/imges/chef.png'
import vest from 'assets/imges/vest.png'

const CollegeShop = () => {

    const itData = [
        {
            id: 1,
            image: imgITfront,
            image2: imgITback,
            item: 'men`s ICT polo',
            price: '350'
        },
        {
            id: 2,
            image: pantsITfront,
            image2: pantsITback,
            item: 'pants',
            price: '450'
        },
    ]

    const tmData = [
        {
            id: 1,
            image: poloTm,
            image2: poloTm,
            item: 'polo',
            price: '355'
        },
        {
            id: 2,
            image: pantsTM,
            image2: pantsTM,
            item: 'pants',
            price: '360'
        },
        {
            id: 3,
            image: blazerTM,
            image2: blazerTM,
            item: 'blazer',
            price: '760'
        },
        {
            id: 4,
            image: tie,
            image2: tie,
            item: 'yellow necktie',
            price: '140'
        },
    ]

    const hmData = [
        {
            id: 1,
            image: poloHM,
            image2: poloHM,
            item: 'polo',
            price: '355'
        },
        {
            id: 2,
            image: pantsHM,
            image2: pantsHM,
            item: 'pants',
            price: '360'
        },
        {
            id: 3,
            image: blazerHM,
            image2: blazerHM,
            item: 'blazer',
            price: '760'
        },
        {
            id: 4,
            image: chef,
            image2: chef,
            item: 'chef`s polo',
            price: '760'
        },
        {
            id: 5,
            image: vest,
            image2: vest,
            item: 'vest',
            price: '310'
        },
    ]

    const bmData = [
        {
            id: 1,
            image: '',
            image2: '',
            item: 'polo',
            price: '355'
        },
        {
            id: 2,
            image: '',
            image2: '',
            item: 'pants',
            price: '360'
        },
        {
            id: 3,
            image: '',
            image2: '',
            item: 'blazer',
            price: '760'
        },
        {
            id: 4,
            image: '',
            image2: '',
            item: 'chef`s polo',
            price: '760'
        },
        {
            id: 5,
            image: '',
            image2: '',
            item: 'vest',
            price: '310'
        },
    ]

    return (
        <>
            <main className='mt-5 h-100'>
                <section className='collegeBanner d-flex justify-content-center pt-3 position-relative'>
                    <img src={bg2} width={'50%'} alt='college' className=' position-relative' />
                    <div className='filt h-100 w-100 z-2 position-absolute top-0 left-0' />
                </section>
                <section className='p-5 h-100 '>
                    <div className='gap-5 ms-5 d-flex'>
                        <button className='text-uppercase rounded-1 px-4 py-1 text-light fs-5 bg-college'>Men</button>
                        <button className='text-uppercase rounded-1 px-4 py-1 fs-5 bg-college2'>Women</button>
                    </div>
                    <div className='list-section d-flex flex-column py-5 z-0'>
                        <div className='list-wrapper mb-5'>
                            <h4 className='ms-5 ps-3'>Information & Communications Technology</h4>
                            <SliderWrapper data={itData} slides={2} setWidth={true}/>
                        </div>
                        <div className='list-wrapper mb-5'>
                            <h4 className='ms-5'>Tourism Management</h4>
                            <SliderWrapper data={tmData} slides={3} setWidth={false}/>
                        </div>
                        <div className='list-wrapper mb-5'>
                            <h4 className='ms-5'>Hospitality Management</h4>
                            <SliderWrapper data={hmData} slides={3} setWidth={false}/>
                        </div>
                        <div className='list-wrapper'>
                            <h4 className='ms-5'>Business & Management</h4>
                            <SliderWrapper data={bmData} slides={3} setWidth={false}/>
                        </div>
                    </div>
                </section>
            </main>
            <AddToCartModal />
        </>
    )
}

export default CollegeShop