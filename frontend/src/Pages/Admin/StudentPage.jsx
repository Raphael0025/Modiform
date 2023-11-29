import React, {useState, useEffect, useCallback} from 'react'
import {Table2} from 'Components'

const StudentPage = () => {
  const tableHeaders = ['User ID', 'User Name', 'Order History'];
  const [searchQuery, setSearchQuery] = useState(null);
  const [filteredContents, setFilteredContents] = useState([]);

  // Fetching Data from Database
  useEffect(() => {
    const fetchUsers = async () => {
      try {
          const response = await fetch('https://modiform-api.vercel.app/api/users')
          const json = await response.json()

          if (response.ok) {
            setFilteredContents(json);
          }
      } catch (error) {
          console.error('Error fetching data:', error);
      }
    };
    fetchUsers()
  }, [])

  const updateFilteredContents = useCallback(() => {
    const filtered = filteredContents.filter((content) =>
      content.user_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.user_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredContents(filtered);
  }, [filteredContents, searchQuery])

  const handleDelete = async (itemToDelete) => {
    try {
      // Make an API call to delete the item in the database
      const response = await fetch(`https://modiform-api.vercel.app/api/users/${itemToDelete._id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete item');
      }

      // Remove the item from the local state using a unique identifier (user ID)
      setFilteredContents((prevInventory) => prevInventory.filter((item) => item.user_id !== itemToDelete.user_id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  }

  useEffect(() => {
    updateFilteredContents(); // Update filteredContents whenever the searchQuery changes
  }, [searchQuery, updateFilteredContents]);


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
          <Table2 headers={tableHeaders} data={filteredContents} onDelete={handleDelete} />
        </div>
      </section>
    </main>
  );
};

export default StudentPage;