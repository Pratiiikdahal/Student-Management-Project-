import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { formTypes } from '../types/StudentTypes';
import { students } from '../utils/students';
import users from '../State/store';
import useUserStore from '../State/store';


interface userDeleteProp {
  users: formTypes | null;
  show: boolean;
  handleClose: () => void;
  onConfirmDelete: () => void;
}

function Modals(props: userDeleteProp) {
  const deleteStudents = useUserStore((state) => state.deleteStudents)

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><strong>Delete User ? </strong></Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure You Want to Delete the user <strong>{props.users?.name}</strong></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              props.onConfirmDelete();
              props.handleClose();
            }}
          >
            Delete Student
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;