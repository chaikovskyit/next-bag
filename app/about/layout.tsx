import Link from 'next/link';
import React from 'react';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<h1>About us</h1>
			<ul>
				<li>
					<Link href='/about/contacts'>Contacts</Link>
					<li>
						<Link href='/about/team'>Team</Link>
					</li>
				</li>
			</ul>
			{children}
		</div>
	);
}
