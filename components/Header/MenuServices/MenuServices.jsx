import { Dropdown } from 'semantic-ui-react'

export default function MenuServices() {
    return (
        <Dropdown item text='Servicios'>
            <Dropdown.Menu>
                <Dropdown.Item>Social Business</Dropdown.Item>
                <Dropdown.Item>Software</Dropdown.Item>
                <Dropdown.Item>Soporte</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
