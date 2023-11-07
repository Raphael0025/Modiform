import React, { useState, useEffect } from 'react'
import logo from 'Assets/images/image_61.png'
import { Link } from 'react-router-dom'
import { handleActiveItem, iconPath } from 'Utils/handlingFunction'
import { IconPark } from '../Assets/Svg'

const Navigation = () => {
  const [item, setItem] = useState('dashboard');

  return (
    <>
            <aside id='side' className='position-fixed top-0 left-0 bottom-0 bg-light py-2 px-1 gap-5 d-flex align-items-center flex-column'>
                <img src={logo} width={'40%'} alt='logo' />
                <ul className='list-unstyled d-flex flex-column gap-1'>
                    <li className='list-itm px-2 py-2 rounded-2' onClick={() => handleActiveItem('dashboard', setItem)}>
                        <Link to='dashboard' className='gap-2 text-decoration-none d-flex align-items-center fw-medium'>
                          <IconPark path={iconPath(item, 'dashboard', 'bxs:dashboard', 'humbleicons:dashboard')} size={30} /> Dashboard
                        </Link>
                    </li>
                    <li className='list-itm px-2 py-2 rounded-2' onClick={() => handleActiveItem('customer', setItem)}>
                        <Link to='customer-management' className='gap-2 text-decoration-none d-flex align-items-center fw-medium'>
                          <IconPark icon={iconPath(item, 'logistic', mdiTruckDelivery, mdiTruckDeliveryOutline)} size={'32px'} color='#003E81'/> Customers
                        </Link>
                    </li>
                    <li className='list-itm px-2 py-2 rounded-2' onClick={() => handleActiveItem('pos', setItem)}>
                        <Link to='point-of-sales'  className='gap-2 text-decoration-none d-flex align-items-center fw-medium'>
                          <IconPark icon={iconPath(item, 'pos', mdiPrinterPos, mdiPrinterPosOutline)} size={'32px'} color='#003E81' /> Point of Sales
                        </Link>
                    </li>
                    <li className='list-itm px-2 py-2 rounded-2' onClick={() => handleActiveItem('order', setItem)}>
                        <Link to='order-mgmt' className='gap-2 text-decoration-none d-flex align-items-center fw-medium'>
                          <IconPark icon={iconPath(item, 'logistic', mdiTruckDelivery, mdiTruckDeliveryOutline)} size={'32px'} color='#003E81'/> Orders
                        </Link>
                    </li>
                    <li className='list-itm px-2 py-2 rounded-2' onClick={() => handleActiveItem('sale', setItem)}>
                        <Link to='sales-mgmt' className='gap-2 text-decoration-none d-flex align-items-center fw-medium'>
                          <IconPark icon={iconPath(item, 'logistic', mdiTruckDelivery, mdiTruckDeliveryOutline)} size={'32px'} color='#003E81'/> Sales
                        </Link>
                    </li>
                    <li className='list-itm px-2 py-2 rounded-2' onClick={() => handleActiveItem('logistic', setItem)}>
                        <Link to='logistic' className='gap-2 text-decoration-none d-flex align-items-center fw-medium'>
                            <IconPark icon={iconPath(item, 'logistic', mdiTruckDelivery, mdiTruckDeliveryOutline)} size={'32px'} color='#003E81'/> Logistics
                        </Link>
                    </li>
                </ul>
            </aside>
            <header id='header' className='position-fixed top-0 end-0 p-2 d-flex align-items-center'>
              <div className='w-50 pe-5 d-flex justify-content-end align-items-center gap-3'>
                <div className='d-flex gap-3'>
                  <a href='/' className='itm'>
                    <BiSolidMessage size={22}/>
                  </a>
                  <a href='/' className='itm'>
                    <BsBellFill size={22}/>
                  </a>
                </div>
              </div>
            </header>
        </>
  )
}

export default Navigation