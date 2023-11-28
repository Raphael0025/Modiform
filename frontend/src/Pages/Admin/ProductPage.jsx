import React, {useState} from 'react'
import { inventory as initialInventory } from 'Utils/initialData';
import {ToggleTable} from 'Components'
import { useNavigate  } from 'react-router-dom';

const ProductPage = () => {
  const headers = ['INV. Class', 'Category', 'Item Code', 'Item Description', 'In Stock', 'Status', 'View Item', 'Published', 'Actions']
  
  // State to keep track of the checked checkboxes
  const [checkedItems, setCheckedItems] = useState([]);
  // State for filtering options
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDropdown, setSelectedDropdown] = useState(null);
  const [searchText, setSearchText] = useState('');

  const handleCheckboxCheck = (itemCode) => {
    if (checkedItems.includes(itemCode)) {
      // If the item is already checked, uncheck it
      setCheckedItems((prevCheckedItems) =>
        prevCheckedItems.filter((code) => code !== itemCode)
      );
    } else {
      // If the item is not checked, check it
      setCheckedItems((prevCheckedItems) => [...prevCheckedItems, itemCode]);
    }
  };

  const [inventory, setInventory] = useState(initialInventory);
  const handleDelete = (itemToDelete) => {
    setInventory((prevInventory) => prevInventory.filter((item) => item !== itemToDelete));
    setCheckedItems([]);
  };

  // Function to handle search
  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  // Function to handle category dropdown change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category === 'All' ? null : category);
  };

  // Function to handle dropdown change
  const handleDropdownChange = (dropdown) => {
    setSelectedDropdown(dropdown === 'All' ? null : dropdown);
  };

  // Filtered data based on selected options
  const filteredData = inventory.filter((item) => {
    return (
      (!selectedCategory || item.category === selectedCategory) &&
      (!selectedDropdown || item.inv_class === selectedDropdown) &&
      (searchText === '' || item.itm_code.toLowerCase().includes(searchText.toLowerCase()))
    );
  });
  
  const navigate = useNavigate();

  return (
    <main id='product' className='container-fluid '>
      <div className='px-3 pt-3 d-flex justify-content-between align-items-center'>
        <div>
          <h2 className='py-2 m-0 page-header'>Item List</h2>
          <p className='m-0' style={{fontSize: '11px', color: 'gray'}}>Manage the items</p>
        </div>
        <div>
          <button onClick={() => {navigate('/admin/new-item');}} className='btn btn-sm p-2 px-3 text-light' style={{backgroundColor: 'var(--dark-blue)'}}>+ Add New Item</button>
        </div>
      </div>

      <section className="container-fluid p-3 pb-0">
        <div className='rounded-3 d-flex align-items-end gap-3 statistic p-3'>
          <div className="d-flex w-100 flex-column">
            <label htmlFor="search">Search Item</label>
            <input value={searchText} onChange={handleSearch} type="text" className="p-2 w-100 rounded-2" id="search" placeholder="Search Item" name="search" required />
          </div>

          <div className="dropdown w-100 statistic">
            <button className="statistic-2 text-light w-100 py-2 rounded-3 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Category
            </button>
            <ul className="dropdown-menu">
              <li><p className="dropdown-item" onClick={() => handleCategoryChange('All')}>All</p></li>
              <li><p className="dropdown-item" onClick={() => handleCategoryChange('Faculty')}>Faculty</p></li>
              <li><p className="dropdown-item" onClick={() => handleCategoryChange('College')}>College</p></li>
              <li><p className="dropdown-item" onClick={() => handleCategoryChange('Senior High')}>Senior High</p></li>
              <li><p className="dropdown-item" onClick={() => handleCategoryChange('Junior High')}>Junior High</p></li>
            </ul>
          </div>

          <div className="dropdown w-100 statistic">
            <button className="statistic-2 text-light w-100 py-2 rounded-3 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Inventory Class
            </button>
            <ul className="dropdown-menu">
              <li><p className="dropdown-item" onClick={() => handleDropdownChange('All')}>All</p></li>
              <li><p className="dropdown-item" onClick={() => handleDropdownChange('Uniform')}>Uniform</p></li>
              <li><p className="dropdown-item" onClick={() => handleDropdownChange('Others')}>Others</p></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-fluid p-3">
        <div className='rounded-3 d-flex align-items-end gap-3 statistic p-3'>
          <ToggleTable headers={headers} data={filteredData} height={'460px'} checkedItems={checkedItems} onCheckboxCheck={handleCheckboxCheck} onDelete={handleDelete}/>
        </div>
      </section>
    </main>
  )
}

export default ProductPage