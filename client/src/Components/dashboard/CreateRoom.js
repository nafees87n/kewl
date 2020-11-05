import React, { useState } from 'react';
import db from '../../firebase';
import Input from './formComponents/Input';
import TextArea from './formComponents/TextArea';
import Button from './formComponents/Button';
const buttonStyle = {
  margin: '10px 10px 10px 10px'
};
const CreateRoom = () => {
  const [newRoomName, setNewRoomName] = useState('');
  const [newRoomAbout, setNewRoomAbout] = useState('');

  function handleInput(e) {
    setNewRoomName(e.target.value);
  }
  function handleTextArea(e) {
    setNewRoomAbout(e.target.value);
  }
  async function handleFormSubmit(e) {
    e.preventDefault();
    await db.collection('rooms').doc(newRoomName).set(
      {
        name: newRoomName,
        description: newRoomAbout
      },
      { merge: true }
    );
    setNewRoomName('');
    setNewRoomAbout('');
    window.location.href = `/dashboard/rooms/${newRoomName}`;
  }
  return (
    <form className="container-fluid" onSubmit={handleFormSubmit}>
      <Input
        inputType={'text'}
        title={'Room Name'}
        value={newRoomName}
        // name={'name'}
        placeholder={'Enter the name of the room here'}
        handleChange={handleInput}
      />{' '}
      <TextArea
        title={'Room Description'}
        // rows={5}
        // name={'About'}
        value={newRoomAbout}
        handleChange={handleTextArea}
        placeholder={'Describe the details about the room'}
      />
      <Button action={handleFormSubmit} type={'primary'} title={'Submit'} style={buttonStyle} />{' '}
    </form>
  );
};

export default CreateRoom;
