import React, {useState} from 'react'
import { useNavigate  } from 'react-router-dom'; 

const NewItemPage = () => {
  const sizes = ['xs', 's', 'm', 'l', 'xl', '2xl', 'none'];
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleSizeChange = (size) => {
    if (size === 'none') {
      // If 'None' is selected, clear all other selected sizes
      setSelectedSizes([]);
    } else {
      // Toggle the selected state of the size
      const updatedSizes = selectedSizes.includes(size)
        ? selectedSizes.filter((selectedSize) => selectedSize !== size)
        : [...selectedSizes, size];
      setSelectedSizes(updatedSizes);
    }
  };
  const navigate = useNavigate();

  return (
    <main id='new-item' className='container-fluid '>
      <div className='px-3 pt-3'>
        <h2 className='py-2 m-0 page-header'>Add New Item</h2>
        <p style={{fontSize: '11px', color: 'gray'}}>Create new item</p>
      </div>
      <section className="container-fluid p-3">
        <div className="rounded-3 statistic p-3">
          <div className='d-flex gap-3'>
            <div className="dropdown statistic">
              <button className="statistic-2 text-light py-2 rounded-3 dropdown-toggle" style={{width: '350px'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Inventory Class
              </button>
              <ul className="dropdown-menu">
                <li><p className="dropdown-item" >All</p></li>
              </ul>
            </div>

            <div className="dropdown statistic">
              <button className="statistic-2 text-light py-2 rounded-3 dropdown-toggle" style={{width: '350px'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Category
              </button>
              <ul className="dropdown-menu">
                <li><p className="dropdown-item" >All</p></li>
              </ul>
            </div>
          </div>

          <div className='d-flex gap-3 mb-3'>
            <div className="d-flex w-100 flex-column">
              <label htmlFor="search">Item Code</label>
              <input type="text" className="p-2 w-100 rounded-2" id="search" placeholder="Item Code" name="search" required />
            </div>

            <div className="d-flex w-100 flex-column">
              <label htmlFor="desc">Item Description</label>
              <input type="text" className="p-2 w-100 rounded-2" id="desc" placeholder="Item Description" name="desc" required />
            </div>

            <div className="d-flex w-100 flex-column">
              <label htmlFor="price">Selling Price</label>
              <input type="text" className="p-2 w-100 rounded-2" id="price" placeholder="Selling Price" name="price" required />
            </div>
          </div>

          <div className='d-flex gap-3 mb-3'>
            <div className='p-3 statistic-2 rounded-3 '>
              <p className='header'>Size</p>
              {sizes.map((size, index) => (
                <div key={index} className='form-check'>
                  <input type='checkbox' className='form-check-input bg-dark ' id={`sizeCheckbox-${size}`} checked={selectedSizes.includes(size)} onChange={() => handleSizeChange(size)} />
                  <label className='form-check-label' htmlFor={`sizeCheckbox-${size}`}>
                    {size.toUpperCase()}
                  </label>
                </div>
              ))}
            </div>

            <div className='p-3 statistic-2 rounded-3 w-100'>
              <p className='header'>Item Images Upload</p>
            </div>
          </div>
          
          <div className='d-flex gap-3 justify-content-end align-items-end flex-column'>
            <button className='btn w-25 text-light px-3 py-2' style={{backgroundColor: 'var(--dark-blue)'}}>Add Item</button>
            <button onClick={() => {navigate('/products');}} className='btn w-25 text-light px-3 py-2' style={{backgroundColor: 'var(--gray)'}}>Cancel</button>
          </div>

        </div>
      </section>
    </main>
  )
}

export default NewItemPage