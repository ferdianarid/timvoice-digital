import { NextPage } from 'next'
import React from 'react'
import FormActions from '../components/localStorage'

// import Homepage Layouts
import HomepageLayouts from '../layouts/HomeLayouts'

const Homepage: NextPage = () => {
	return (
		<React.Fragment>
			<HomepageLayouts>
				<FormActions />
			</HomepageLayouts>
		</React.Fragment>
	)
}

export default Homepage
