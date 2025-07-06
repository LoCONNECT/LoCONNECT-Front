import { Modal } from "antd";
import { Dispatch, ReactNode, SetStateAction } from "react";
import Image from "next/image";
import clsx from "clsx";

interface ModalContainerProps {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  modalContent: ReactNode;
  type: string;
}

const ModalContainer = ({
  modalOpen,
  setModalOpen,
  modalContent,
  type,
}: ModalContainerProps) => {
  return (
    <Modal
      title="알림"
      centered
      open={modalOpen}
      onOk={() => setModalOpen(false)}
      onCancel={() => setModalOpen(false)}
      footer={null}
      className="custom-modal"
      bodyStyle={{ padding: "24px", fontSize: "16px" }}
    >
      <div className={clsx(`modal_img ${type}`)}>
        <Image src={`/modalImg/${type}.png`} alt={type} fill />
      </div>
      {modalContent}
    </Modal>
  );
};

export default ModalContainer;
