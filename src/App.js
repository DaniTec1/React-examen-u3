import "./App.css";
import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import data from "./data.json";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const columns = [
  {
    name: "id",
    selector: "id",
    sortable: true,
  },
  {
    name: "first_name",
    selector: "first_name",
    sortable: true,
  },
  {
    name: "last_name",
    selector: "last_name",
    sortable: true,
  },
  {
    name: "email",
    selector: "email",
    sortable: true,
  },
  {
    name: "gender",
    selector: "gender",
    sortable: true,
  },
  {
    name: "ip_address",
    selector: "ip_address",
    sortable: true,
  },
];

function App() {
  const tableData = {
    columns,
    data,
    print: false,
  };
  return (
    <div>
      <div className="derecha">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button onClick={toPdf}>
              <span class="material-icons">picture_as_pdf</span>
            </button>
          )}
        </Pdf>
      </div>
      <div ref={ref}>
        <DataTableExtensions {...tableData}>
          <DataTable
            noHeader
            defaultSortname="id"
            defaultSortAsc={false}
            pagination
            highlightOnHover
          />
        </DataTableExtensions>
      </div>
    </div>
  );
}

export default App;
