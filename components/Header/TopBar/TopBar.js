import React, { useState } from 'react'
import { Menu, Input, Button } from 'semantic-ui-react'
import Image from 'next/image'
import Link from 'next/link'
import MenuUser from '../MenuUser'
import BasicModal from '../../Modal/BasicModal/BasicModal'

export default function TopBar() {
    const [state, setstate] = useState({})
    const [showModal, setShowModal] = useState(false)

    const handleItemClick = (e, { name }) => setState({ activeItem: name })

    const { activeItem } = state;

    return (
        <Menu stackable inverted={true} color={'orange'}>
            <Menu.Item>
                <Logo />
            </Menu.Item>

            <Menu.Item
                name='aboutus'
                active={activeItem === 'aboutus'}
                onClick={handleItemClick}
            >
                Nosotros
            </Menu.Item>

            <Menu.Item
                name='blog'
                active={activeItem === 'blog'}
                onClick={handleItemClick}
            >
                Blog
            </Menu.Item>

            <Menu.Item
                name='sign-in'
                active={activeItem === 'sign-in'}
                onClick={handleItemClick}
            >
                Sign-in
            </Menu.Item>

            <Menu.Menu position="right">
                <MenuUser />
                <Menu.Item>
                    <Button circular color='orange' icon='sign-in' >Ingresar</Button>
                </Menu.Item>
                <Menu.Item>
                    <Search />
                </Menu.Item>
            </Menu.Menu>
            <BasicModal>
                <h1>XD</h1>
            </BasicModal>
        </Menu>
    )
}

function Logo() {
    return (
        <Link href="/">
            <a><Image src="/icon.png" alt="Social Business" width={30} height={30} /></a>
        </Link>
    )
}

function Search() {
    return (
        <Input icon='search' placeholder='Search mail...' />
    )
}