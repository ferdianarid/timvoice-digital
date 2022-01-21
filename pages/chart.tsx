import React from 'react'

import DoughnutChart from '../components/chart/Doughnut'
import LineChart from '../components/chart/LineChart'


const chart = () => {
       return (
              <React.Fragment>
                     <div className="flex justify-between">
                            <DoughnutChart />
                            <LineChart />
                     </div>
              </React.Fragment>
       )
}

export default chart
