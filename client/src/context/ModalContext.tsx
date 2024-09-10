import 'react-responsive-modal/styles.css';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Modal as ResponsiveModal } from 'react-responsive-modal';

interface ModalContextProps {
    openModal: (content: ReactNode) => void;
    closeModal: () => void;
    isOpen: boolean;
    modalContent: ReactNode;
}

const ModalContext = createContext<ModalContextProps>({
    openModal: () => { },
    closeModal: () => { },
    isOpen: false,
    modalContent: null,
});

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState<ReactNode>(null);

    const openModal = (content: ReactNode) => {
        setModalContent(content);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setModalContent(null);
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal, isOpen, modalContent }}>
            {children}
            <ResponsiveModal open={isOpen} onClose={closeModal} center>
                {modalContent}
            </ResponsiveModal>
        </ModalContext.Provider>
    );
};

const useModal = () => useContext(ModalContext);

export { ModalProvider, useModal };
