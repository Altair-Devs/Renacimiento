import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Menu, Container } from 'semantic-ui-react'

export default function Navbar() {
	const { pathname } = useRouter()

	return (
		<Menu size="huge" borderless pointing as="header">
			<Container text>
			<Link href="/" passHref>
          <Menu.Item
            active={pathname === '/'}
            title="Home"
          >
            Obras del Renacimiento
          </Menu.Item>
        </Link>
			</Container>
		</Menu>
	);
}
