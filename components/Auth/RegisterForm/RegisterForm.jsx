import React from 'react'
import { Button } from 'semantic-ui-react'

export default function RegisterForm({ showLoginForm }) {
    return (
        <div>
            <h2>Register</h2>
            <Button onClick={showLoginForm}>Login</Button>
        </div>
    )
}
