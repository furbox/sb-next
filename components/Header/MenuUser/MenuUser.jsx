import React from 'react'
import { Dropdown, Image } from 'semantic-ui-react'

export default function MenuUser() {
    const trigger = (
        <span>
            <Image alt="UserName" avatar src="icon.png" /> UserName
        </span>
    )
    const options = [
        { key: 'user', text: 'Account', icon: 'user' },
        { key: 'settings', text: 'Settings', icon: 'settings' },
        { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
    ]

    return (
        <Dropdown item
            trigger={trigger}
            options={options}
            pointing='top left'
            icon={null}
        />
    )
}
