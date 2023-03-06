import * as React from 'react';
import Layout from '../components/Layout';

export default function Home() {
	return (
		<>
			<Layout>
				<h1>Welcome to EduP</h1>

				<div>
					<h2>Here is a little image of a PoS</h2>
					<img src="/posSystem.png" alt="pos" width={400} />
				</div>
			</Layout>
		</>
	);
}
