import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DataTable from '../../components/dataTable/DataTable';

import './list.scss';

const List = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className='list-container'>
        <Navbar />
        <DataTable />
      </div>
    </div>
  );
};

export default List;
