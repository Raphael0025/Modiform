import React from 'react'
import { Table3 } from 'Components'
import {inventory} from 'Utils/initialData'
import {IconPark} from 'Assets/SvgIcons'
import {iconPath} from 'Utils/handlingFunction' 

const InventoryPage = () => {
  const headers = ['Inventory Class', 'Category', 'Item Code', 'Item Description', 'In Stock']

  return (
    <main id='inventory' className='container-fluid '>
      <div className='px-3 pt-3'>
        <h2 className='py-2 page-header'>Inventory Management</h2>
      </div>
      <section className='container-fluid p-3'>
        <p className='m-0 text-secondary'>Add new delivered items</p>
        <section className='rounded-3 d-grid align-items-center grid-container statistic p-3'>
          <div className="dropdown statistic">
            <button className="statistic-2 text-light w-100 py-2 rounded-3 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Inventory Class
            </button>
            <ul className="dropdown-menu">
              <li><p className="dropdown-item" >All</p></li>
              <li><p className="dropdown-item" >Uniform</p></li>
              <li><p className="dropdown-item" >Others</p></li>
            </ul>
          </div>

          <div className="dropdown statistic">
            <button className="statistic-2 text-light w-100 py-2 rounded-3 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Category
            </button>
            <ul className="dropdown-menu">
              <li><p className="dropdown-item" >All</p></li>
              <li><p className="dropdown-item" >Faculty</p></li>
              <li><p className="dropdown-item" >College</p></li>
              <li><p className="dropdown-item" >Senior High</p></li>
              <li><p className="dropdown-item" >Junior High</p></li>
            </ul>
          </div>
          <button className='btn py-2 btn-sm text-light' style={{backgroundColor: 'var(--dark-blue)'}}>Update Item Stock <IconPark path={iconPath('', 'messages', 'ic:twotone-browser-updated', 'ic:twotone-browser-updated')} size={20} /></button>

          <div className="d-flex flex-column">
            <label htmlFor="itm_code">Item Code</label>
            <input type="text" className="p-2 w-100 rounded-2" id="itm_code" placeholder="item Code" name="itm_code" required />
          </div>

          <div className="d-flex flex-column">
            <label htmlFor="itm_desc">Item Description</label>
            <input type="text" className="p-2 w-100 rounded-2" id="itm_desc" placeholder="Item Description" name="itm_desc" required />
          </div>

          <div className="d-flex gap-3 statistic-2 p-3 rounded-2 align-items-center">
            <p className='m-0'>Quantity</p>
            <div className='d-flex gap-3'>
              <button className='btn btn-outline-light'>-</button>
              <input type="number" className="p-2 w-100 rounded-2" required />
              <button className='btn btn-outline-light'>+</button>
            </div>
          </div>
        </section>
      </section>

      <section className='container-fluid p-3'>
        <p className='m-0 text-secondary'>Stock List</p>
        <section className='rounded-3 d-flex align-items-end gap-3 statistic p-3'>
          <Table3 data={inventory} headers={headers} />
        </section>
      </section>
    </main>
  )
}

export default InventoryPage