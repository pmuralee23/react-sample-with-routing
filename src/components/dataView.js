import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';

export class DataView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: []
        };
    }
    componentDidMount() {
        this.getTableData();
    }
    getTableData() {
        axios.get("https://data.sfgov.org/api/id/88g8-5mnd.json?$select=*&$order='department'+ASC&$limit=17&$offset=0&$$read_from_nbe=true&$$version=2.1")
            .then((data) => {
                this.setState({ tableData: data.data });
                // *** We can use the below code to add column names dynamically i.e read from API response
                
                //this.state.tableData.map(header => {
                    // console.log(header);
                    // <TableHeaderColumn
                    //   filter={header.filter}
                    //   key={header.id}
                    //   dataField={header.id}
                    //   thStyle={{
                    //     whiteSpace: 'normal',
                    //     textAlign: 'center',
                    //     lineHeight: 2,
                    //   }}
                    //   dataFormat={header.date && this.dateFormatter}
                    //   width={header.width}
                    // >
                    //     {header.name}
                    // </TableHeaderColumn>
                //})
            });
    }
    onAfterSaveCell(value, name) {
        console.log('Cell saved.....');
    }
    onAddRow(row) {
        console.log('Row Added.....');
      }
    onDeleteRow(rows) {
        console.log('Row(s) Deleted.....');
    }
    afterColumnFilter(filterConds, result) {
        console.log('Filter Conditions: ');
    }
    render() {
        return (
            <div className="container">
                <div className="view-header">
                    <h2>Tabular View </h2>
                </div>
                <BootstrapTable data={this.state.tableData}
                    selectRow={{
                        mode: 'checkbox'
                    }}
                    cellEdit={{
                        mode: 'click',
                        blurToSave: true,
                        afterSaveCell: this.onAfterSaveCell,
                        afterColumnFilter: this.afterColumnFilter
                    }}
                    striped
                    hover
                    insertRow
                    deleteRow
                    search
                    options= {{
                        onDeleteRow: this.onDeleteRow,
                        onAddRow: this.onAddRow
                    }}>
                    <TableHeaderColumn dataField='year' isKey={true}>Year</TableHeaderColumn>
                    <TableHeaderColumn dataField='organization_group'>Organization Group</TableHeaderColumn>
                    <TableHeaderColumn dataField='department_code'>Department Code</TableHeaderColumn>
                    <TableHeaderColumn dataField='union_code'>Union Code</TableHeaderColumn>
                    <TableHeaderColumn dataField='union'>Union</TableHeaderColumn>
                    <TableHeaderColumn dataField='job_family'>Job Family</TableHeaderColumn>
                    <TableHeaderColumn dataField='employee_identifier'>Employee Identifier</TableHeaderColumn>
                    <TableHeaderColumn dataField='salaries'>Salaries</TableHeaderColumn>
                    <TableHeaderColumn dataField='total_compensation'>Total Compensation</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
} 