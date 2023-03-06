import React from 'react';
import NavBar from './navbar';

export default function Layout({ children }) {
	return (
		<div className="layout">
			<NavBar />
			<section className="content">{children}</section>
			<footer>This is a footer</footer>
		</div>
	);
}
