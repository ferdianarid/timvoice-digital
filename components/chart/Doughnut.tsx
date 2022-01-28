import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
	const [datasets, setDatasets] = useState([])

	const InvoiceRecord = {
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
		datasets: [
			{
				label: 'FInance',
				// data: [12, 19, 3, 5, 2, 3],
				data: [34, 65, 78, 23, 78, 97],
				backgroundColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
				],
				borderColor: [
					// 'rgba(255, 99, 132, 1)',
					// 'rgba(54, 162, 235, 1)',
					// 'rgba(255, 206, 86, 1)',
					// 'rgba(75, 192, 192, 1)',
					// 'rgba(153, 102, 255, 1)',
					// 'rgba(255, 159, 64, 1)',
					"#FFFFFF"
				],
				borderWidth: 5,
			},
		],
	};

	return (
		<Doughnut data={InvoiceRecord} />
	)
}

export default DoughnutChart