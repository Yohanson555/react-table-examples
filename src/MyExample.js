import React from 'react';
import Table from './components/Table';

export default () => {
    const data = React.useMemo(
        () => [
          {
            col1: 'Hello',
            col2: 'World',
          },
          {
            col1: 'react-table',
            col2: 'rocks',
          },
          {
            col1: 'whatever',
            col2: 'you want!',
          },
          {
            col1: 'whatever',
            col2: 'you want',
          },
        ],
        []
      )
    
      const columns = React.useMemo(
        () => [
          {
            Header: 'Column 1',
            accessor: 'col1', // accessor is the "key" in the data
          },
    
          {
            Header: 'Column 2',
            accessor: (d) => d.col2 + "!!!",
          },
        ],
        []
      )
    
      return <Table columns={columns} data={data} />;
};