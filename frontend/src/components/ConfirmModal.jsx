import Modal from "./Modal";
import Button from "./Button";

const ConfirmModal = ({
  open,
  title = "Confirmation",
  message,
  onConfirm,
  onCancel,
}) => {

  return (

    <Modal
      open={open}
      title={title}
      onClose={onCancel}
    >

      <p className="text-gray-600 mb-6">

        {message}

      </p>

      <div className="flex justify-end gap-3">

        <Button
          variant="secondary"
          onClick={onCancel}
        >
          Cancel
        </Button>

        <Button
          variant="danger"
          onClick={onConfirm}
        >
          Confirm
        </Button>

      </div>

    </Modal>

  );
};

export default ConfirmModal;