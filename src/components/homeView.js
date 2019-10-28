import React from 'react';

export class HomeView extends React.Component {
    render() {
        return (
            <div className="container steps">
                <h3>In this Assignment I have used libraries mentioned below (Without Redux)</h3>
                <div className="step">Create React App: Npx create-react-app react-assignment</div>
                <div className="step">Axios: Install axios for Backend API calls</div>
                <div className="step">Pie Chart
            <ul>
                        <li className="sub-step">Install react-chartjs-2 for Charts view</li>
                        <li className="sub-step">For customizing datalabels in the chart: npm install chartjs-plugin-datalabels –save</li>
                        <li className="sub-step">Color Schemas for Pie chart: npm install chartjs-plugin-colorschemes --save</li>
                    </ul>
                </div>
                <div className="step">React Bootstrap Table for Tabular ChartsView
          <ul>
                        <li className="sub-step">npm install react-bootstrap-table --save</li>
                        <li className="sub-step">Added dummy event handler methods for handling different operations performed on data table</li>
                        <li className="sub-step">Have some commented code which is to customize the components</li>
                    </ul>
                </div>
            </div>
        );
    }
}