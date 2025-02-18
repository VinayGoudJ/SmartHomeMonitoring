import * as React from 'react';
import styles from './AiSmartHomeWebpart.module.scss';
import type { IAiSmartHomeWebpartProps } from './IAiSmartHomeWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { SPFI, spfi } from "@pnp/sp";
import { Web } from "@pnp/sp/webs";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
//import { Card, CardSection } from "@fluentui/react-components";
import { Card, CardHeader, CardPreview } from "@fluentui/react-components";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

let _sp: SPFI;
const getSP = (): SPFI => {
    if (!_sp) {
        _sp = spfi(Web("https://rivieredu.sharepoint.com/sites/mydevsite"));
    }
    return _sp;
};

export default class AiSmartHomeWebpart extends React.Component<
    IAiSmartHomeWebpartProps,
    { motionData: any[]; temperatureData: any[]; securityLogs: any[] }
> {
    constructor(props: IAiSmartHomeWebpartProps) {
        super(props);
        this.state = {
            motionData: [],
            temperatureData: [],
            securityLogs: []
        };
    }

    async componentDidMount() {
        const sp: SPFI = getSP();
    
        try {
            console.log("Fetching Motion Sensor Data...");
            const motionData = await sp.web.lists.getByTitle("MotionSensorData").items
                .select("Timestamp", "Location", "MotionDetected")
                .top(5000)
                .filter("ID gt 0")();
    
            console.log("Fetching Temperature Data...");
            const temperatureData = await sp.web.lists.getByTitle("TemperatureData").items
                .select("Timestamp", "Room", "Temperature")
                .top(5000)
                .filter("ID gt 0")();
    
            console.log("Fetching Security Logs...");
            const securityLogs = await sp.web.lists.getByTitle("SecurityLogs").items
                .select("Timestamp", "Event", "Status")
                .top(5000)
                .filter("ID gt 0")();
    
            console.log("Motion Data:", motionData);
            console.log("Temperature Data:", temperatureData);
            console.log("Security Logs:", securityLogs);
    
            this.setState({ motionData, temperatureData, securityLogs });
        } catch (error) {
            console.error("Error fetching SharePoint list data", error);
        }
    }
    

    public render(): React.ReactElement<IAiSmartHomeWebpartProps> {
        const { description, environmentMessage, hasTeamsContext, userDisplayName } = this.props;

        // Data for Motion Detection Chart // new changes added in dev 
        const motionChartData = {
            labels: this.state.motionData.map(item => item.Timestamp),
            datasets: [
                {
                    label: 'Motion Detected',
                    data: this.state.motionData.map(item => item.MotionDetected ? 1 : 0),
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                }
            ]
        };

        // Data for Temperature Trend Chart
        const temperatureChartData = {
            labels: this.state.temperatureData.map(item => item.Timestamp),
            datasets: [
                {
                    label: 'Temperature (°C)',
                    data: this.state.temperatureData.map(item => item.Temperature),
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                }
            ]
        };

        return (
            <section className={`${styles.aiSmartHomeWebpart} ${hasTeamsContext ? styles.teams : ''}`}>
                <div className={styles.welcome}>
                    <h2>Welcome, {escape(userDisplayName)}!</h2>
                    <div>{environmentMessage}</div>
                    <div>
                        Web part property: <strong>{escape(description)}</strong>
                    </div>
                </div>

                <h3>🏠 AI Smart Home Monitoring Dashboard</h3>

                {/* Motion Detection Chart */}
                <Card>
    <CardHeader header={<h4>📡 Motion Detection Analytics</h4>} />
    <CardPreview>
        <Bar data={motionChartData} />
    </CardPreview>
</Card>

<Card>
    <CardHeader header={<h4>🌡️ Temperature Trends</h4>} />
    <CardPreview>
        <Bar data={temperatureChartData} />
    </CardPreview>
</Card>

<Card>
    <CardHeader header={<h4>🔒 Security Logs</h4>} />
    <CardPreview>
        <ul>
            {this.state.securityLogs.map((item, index) => (
                <li key={index}>
                    {item.Timestamp} - {item.Event} - {item.Status}
                </li>
            ))}
        </ul>
    </CardPreview>
</Card>

            </section>
        );
    }
}
