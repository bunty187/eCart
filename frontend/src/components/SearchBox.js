import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import FormControl from 'react-bootstrap/esm/FormControl';
import { useNavigate } from 'react-router-dom'

export default function SearchBox() {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <div>
            <Form className="d-flex me-auto" onSubmit={submitHandler}>
                <InputGroup>
                    <FormControl type="text" name="q" id="q" onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search Product..." aria-label="Search Products"
                        aria-describedby="button-search">
                    </FormControl>
                    <Button variant="outline-primary" type="submit" id="button-search">
                        <i className="fas fa-search"></i>
                    </Button>
                </InputGroup>
            </Form>
        </div>
    );
}
