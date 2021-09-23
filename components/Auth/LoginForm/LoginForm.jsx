import React from 'react'
import { Button } from 'semantic-ui-react'

export default function LoginForm({ showRegisterForm }) {
    return (
        <div>
            <h1>Login</h1>
            <Button onClick={showRegisterForm}> Register </Button>
        </div>
    )
}
