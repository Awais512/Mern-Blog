import PropTypes from "prop-types";
import { Modal as FlowbiteModal, Button } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const GenericModal = ({ showModal, onClose, onConfirm, title }) => {
  return (
    <FlowbiteModal show={showModal} onClose={onClose} popup size="md">
      <FlowbiteModal.Header />
      <FlowbiteModal.Body>
        <div className="text-center">
          <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
          <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
            {title}
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={onConfirm}>
              Confirm
            </Button>
            <Button color="gray" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </FlowbiteModal.Body>
    </FlowbiteModal>
  );
};

// Inside the GenericModal component
GenericModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default GenericModal;
