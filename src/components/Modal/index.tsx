import React from 'react'
import { useDashboard } from '../../context'
import { ModalBackDrop, ModalContainer } from './Modal.styles'
import { CustomSizeFlexContainer } from '../Container'
import { Text } from '../Typography'
import { IconButton } from '../Button'
import { Close } from '../../assets/icons'

const Modal: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isModalOpen, setIsModalOpen } = useDashboard();

  return (
    isModalOpen && (
      <ModalBackDrop>
        <ModalContainer>
          <CustomSizeFlexContainer
            useUtilsCss
            margin="0.5rem 0"
            justify="space-between"
            alignItems="center"
          >
            <Text>Match views with time</Text>
            <IconButton onClick={() => setIsModalOpen(false)}>
              <Close color="#fff" />
            </IconButton>
          </CustomSizeFlexContainer>
          {children}
        </ModalContainer>
      </ModalBackDrop>
    )
  );
};

export default Modal