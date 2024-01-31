import PropTypes from "prop-types";
import { Table } from "flowbite-react";
import GenericModal from "./GenericModal";
import { FaCheck, FaTimes } from "react-icons/fa";

const UserTable = ({
  users,
  showMore,
  handleShowMore,
  showModal,
  setShowModal,
  handleDeleteUser,
  setUserIdToDelete,
}) => {
  return (
    <>
      <Table>
        <Table.Head>
          <Table.HeadCell>Date Created</Table.HeadCell>
          <Table.HeadCell>User Image</Table.HeadCell>
          <Table.HeadCell>Username</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Admin</Table.HeadCell>
          <Table.HeadCell>Delete</Table.HeadCell>
        </Table.Head>
        {users.map((user) => (
          <Table.Body className="divide-y" key={user._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>
                {new Date(user.createdAt).toLocaleDateString()}
              </Table.Cell>
              <Table.Cell>
                <img
                  src={user.profilePicture}
                  className="w-10 h-10 object-cover bg-gray-500 rounded-full"
                  alt={user.username}
                />
              </Table.Cell>
              <Table.Cell>{user.username}</Table.Cell>

              <Table.Cell>{user.email}</Table.Cell>

              <Table.Cell>
                <span>
                  {user.isAdmin ? (
                    <FaCheck className="text-green-500" />
                  ) : (
                    <FaTimes className="text-red-500" />
                  )}
                </span>
              </Table.Cell>
              <Table.Cell>
                <span
                  onClick={() => {
                    setShowModal(true);
                    setUserIdToDelete(user._id);
                  }}
                  className="font-medium bg-rose-500 hover:bg-rose-900 transition text-white p-1.5 rounded-md cursor-pointer"
                >
                  Delete
                </span>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
      {showMore && (
        <button
          onClick={handleShowMore}
          className="w-full text-teal-500 self-center text-sm py-7"
        >
          Show more
        </button>
      )}
      <GenericModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDeleteUser}
        title={"Delete User"}
      />
    </>
  );
};

UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  showMore: PropTypes.bool.isRequired,
  handleShowMore: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setUserIdToDelete: PropTypes.func.isRequired,
};

export default UserTable;
