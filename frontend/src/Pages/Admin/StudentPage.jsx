import React, {useState, useEffect, useCallback} from 'react'
import {Table2} from 'Components'
import {user} from 'Utils/initialData'

const StudentPage = () => {
  const tableHeaders = ['User ID', 'User Name', 'Order History'];
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContents, setFilteredContents] = useState(user);

  const updateFilteredContents = useCallback(() => {
    let filtered = user; // Should be filteredContents here

    filtered = filtered.filter((content) =>
      content.user_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.user_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredContents(filtered);
  }, [searchQuery]);

  useEffect(() => {
    updateFilteredContents(); // Update filteredContents whenever the searchQuery changes
  }, [searchQuery, updateFilteredContents]);

  const deleteItem = (item) => {
    // Remove the item from filteredContents
    setFilteredContents((prevContents) =>
      prevContents.filter((content) => content !== item)
    );
  };

  return (
    <main id="customer" className="container-fluid vh-100">
      <div className="px-3 pt-3">
        <h2 className="py-2 page-header">Customer Management</h2>
      </div>
      <section className="container-fluid p-3">
        <div className="rounded-3 statistic p-3">
          <div className="d-flex w-100 flex-column">
            <label htmlFor="search">Search by User ID/ User Name</label>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="p-2 w-100 rounded-2" id="search" placeholder="Search by User ID/ User Name" name="search" required />
          </div>
        </div>
      </section>
      <section className="container-fluid p-3 text-light">
        <p style={{ fontSize: '14px' }}>User List</p>
        <div className="px-4">
          <Table2 headers={tableHeaders} data={filteredContents} onDelete={deleteItem} />
        </div>
      </section>
    </main>
  );
};

export default StudentPage;