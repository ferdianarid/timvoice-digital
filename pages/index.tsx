import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import Image from "next/image"

// import Homepage Layouts
import HomepageLayouts from '../layouts/HomeLayouts'

// import Hero Image
import HeroImage from "../public/Hero.png"

const Homepage: NextPage = () => {
	return (
		<React.Fragment>
			<HomepageLayouts>

			</HomepageLayouts>
		</React.Fragment>
	)
}

export default Homepage
