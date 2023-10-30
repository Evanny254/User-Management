// import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

function UserForm(props) {
  const { firstName, handleSaveUser } = props;

  const handleClick = () => {
    console.log('Clicked');
  };

  return (
    <Stack direction="horizontal" gap={3}>
      <Form.Control
        className="me-auto"
        placeholder="Add your item here..."
      />
      <Form.Control
        className="me-auto"
        placeholder="Add your item here..."
      />
      <Button
        variant="secondary"
        onClick={handleClick}
      >
        Submit
      </Button>
      <div className="vr" />
      <Button variant="outline-danger">Reset</Button>
    </Stack>
  );
}

export default UserForm;
