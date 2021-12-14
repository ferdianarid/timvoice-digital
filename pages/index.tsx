import { NextPage } from 'next'
import React from 'react'

// import Homepage Layouts
import HomepageLayouts from '../layouts/HomeLayouts'

const Homepage: NextPage = () => {
	return (
		<React.Fragment>
			<HomepageLayouts>
				<div className="w-full bg-blue-300 h-24">
					Heading
				</div>
			</HomepageLayouts>
		</React.Fragment>
	)
}

export default Homepage
