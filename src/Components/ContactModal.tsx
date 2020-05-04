import React from 'react';
import Modal from '@material-ui/core/Modal';
import {ContactForm} from './ContactForm';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {ModalContentWrapper} from './CardElements';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
}

export const ContactModal: React.FC<Props> = ({isOpen, setIsOpen}) => {
  const paddingLeft = useMediaQuery('(min-width:600px)');

  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <ModalContentWrapper paddingLeft={paddingLeft}>
        <ContactForm />
      </ModalContentWrapper>
    </Modal>
  );
};
