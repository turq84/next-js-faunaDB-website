import React, { useState } from 'react';
import styled from '@emotion/styled';

const LinkForm = ({ refreshLinks }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const resetForm = () => {
    setName('');
    setDescription('');
    setUrl('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { name, url, description };
    try {
      const res = await fetch('/.netlify/functions/createLink', {
        method: 'POST',
        body: JSON.stringify(body),
      });
      resetForm();
      refreshLinks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <h3>Add a new link</h3>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            name="url"
            placeholder="URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </InputContainer>
        <TextAreaContainer>
          <TextArea
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button type="submit">Submit</Button>
        </TextAreaContainer>
      </form>
    </Container>
  );
};

export default LinkForm;

const Container = styled.div`
  width: 550px;
  margin: auto;
`;

const Button = styled.button`
  background-color: #ff3366;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  font-size 18px;
  cursor: pointer;
  width: 8em;
  margin: auto;
  transition: all 0.15s linear 0s;

  &:hover {
    box-shadow: 0px 5px 15px rgba(2, 38, 64, 0.25);
    transition: all 0.15s linear 0s;
  }
`;

const Input = styled.input`
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 10px 15px;
  width: 15rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.textarea`
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 10px 15px;
  width: 100%;
  margin-bottom: 30px;
  height: 200px;
`;
