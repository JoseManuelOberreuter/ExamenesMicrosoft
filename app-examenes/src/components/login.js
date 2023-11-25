import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (user == "" || password == ""){
            setError(true)
            return
        }
        else {
            setError(false)

            localStorage.setItem('username', user); 

            navigate('/Home');

        }
    }

    return (
        <Form onSubmit={handleSubmit} className='text-center'>
            <h1>Login</h1>

            <FormGroup >
                <Label for="username">Username</Label>
                <Input 
                    value={user}
                    onChange={e => setUser(e.target.value)}
                    type="text" 
                    name="username" 
                    id="username"
                    placeholder="Enter your username" 
                    
                />
            </FormGroup>

            <FormGroup>
                <Label for="password">Password</Label>
                <Input 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Enter your password" 
                    
                />
            </FormGroup>

            <Button color="primary" style={{width: '210px'}}>Login</Button>

            {error && <p className='text-danger'>Campos Obligatorios</p>}
        </Form>
    );
};