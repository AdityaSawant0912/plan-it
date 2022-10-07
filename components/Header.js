import React, { Component } from 'react'
import Head from 'next/head'

export default class Header extends Component {
	render() {
		return (
			<>
			<Head>
					<title>{this.props.title}</title>
			</Head>
			</>
		)
	}
}
