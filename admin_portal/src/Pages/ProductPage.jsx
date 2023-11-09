import React from 'react'
import {inventory} from 'Utils/initialData'
import {ToggleTable} from 'Components'

const ProductPage = () => {
  const headers = ['INV. Class', 'Category', 'Item Code', 'Item Description', 'In Stock', 'Status', 'View Item', 'Published', 'Actions']
  return (
    <main id='product' className='container-fluid '>
      <div className='px-3 pt-3 d-flex justify-content-between align-items-center'>
        <div>
          <h2 className='py-2 m-0 page-header'>Item List</h2>
          <p className='m-0' style={{fontSize: '11px', color: 'gray'}}>Manage the items</p>
        </div>
        <div>
          <button className='btn btn-sm p-2 px-3 text-light' style={{backgroundColor: 'var(--dark-blue)'}}>+ Add New Item</button>
        </div>
      </div>

      <section className="container-fluid p-3 pb-0">
        <div className='rounded-3 d-flex align-items-end gap-3 statistic p-3'>
          <div className="d-flex w-100 flex-column">
            <label htmlFor="search">Search Item</label>
            <input type="text" className="p-2 w-100 rounded-2" id="search" placeholder="Search Item" name="search" required />
          </div>

          <div className="dropdown w-100 statistic">
            <button className="statistic-2 text-light w-100 py-2 rounded-3 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Category
            </button>
            <ul className="dropdown-menu">
              <li><p className="dropdown-item" >Uniform</p></li>
              <li><p className="dropdown-item" >Others</p></li>
            </ul>
          </div>

          <div className="dropdown w-100 statistic">
            <button className="statistic-2 text-light w-100 py-2 rounded-3 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Price
            </button>
            <ul className="dropdown-menu">
              <li><p className="dropdown-item" >Still in Progress</p></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-fluid p-3">
        <div className='rounded-3 d-flex align-items-end gap-3 statistic p-3'>
          <ToggleTable headers={headers} data={inventory} height={'460px'} />
        </div>
      </section>
    </main>
  )
}

export default ProductPage