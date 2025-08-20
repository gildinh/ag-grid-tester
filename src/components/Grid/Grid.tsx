import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
import { AllEnterpriseModule } from 'ag-grid-enterprise';
import { AgGridReact } from 'ag-grid-react';
import { useRef, useState } from 'react';
import { useFetchJson } from '../../api/apiUtils';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule, AllEnterpriseModule]);

const Grid = () => {
  const { data, loading } = useFetchJson<any>(
    "https://api.openbrewerydb.org/v1/breweries",
  );

  console.log(data);
  console.log(loading);

    const [columnDefs, setColumnDefs] = useState([
        { field: 'id' },
        { field: 'name' },
        { field: 'city' },
        { field: 'state' },
        { field: 'country' },
        { field: 'brewery_type' },
    ]);

    const [rowData, setRowData] = useState([
        { athlete: 'Michael Phelps', sport: 'Swimming', age: 23 },
        { athlete: 'Aleksey Nemov', sport: 'Gymnastics', age: 23 },
        { athlete: 'Alicia Coutts', sport: 'Swimming', age: 21 },
        { athlete: 'Aly Raisman', sport: 'Gymnastics', age: 19 }
    ]);

    const gridRef = useRef<AgGridReact>(null);

  return (
    <div className='ag-grid-container'>
      <div className="ag-theme-alpine grid-style">
        <AgGridReact
          rowData={data}
          loading={loading}
          ref={gridRef}
          columnDefs={columnDefs}
        />
      </div>
    </div>
  );
};

export default Grid;