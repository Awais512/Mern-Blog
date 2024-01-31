import PropTypes from "prop-types";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
import GenericModal from "./GenericModal";

const PostTable = ({
  userPosts,
  showMore,
  handleShowMore,
  showModal,
  setShowModal,
  handleDeletePost,
  setPostIdToDelete,
}) => {
  return (
    <>
      <Table>
        <Table.Head>
          <Table.HeadCell>Date Updated</Table.HeadCell>
          <Table.HeadCell>Post Image</Table.HeadCell>
          <Table.HeadCell>Post Title</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Delete</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit</span>
          </Table.HeadCell>
        </Table.Head>
        {userPosts.map((post) => (
          <Table.Body className="divide-y" key={post._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>
                {new Date(post.updatedAt).toLocaleDateString()}
              </Table.Cell>
              <Table.Cell>
                <Link
                  className="font-medium text-gray-900 dark:text-white"
                  to={`/post/${post.slug}`}
                >
                  <img
                    src={post.image}
                    className="w-20 h-10 object-cover bg-gray-500"
                    alt={post.title}
                  />
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link to={`/post/${post.slug}`}>{post.title}</Link>
              </Table.Cell>
              <Table.Cell>{post.category}</Table.Cell>
              <Table.Cell>
                <span
                  onClick={() => {
                    setShowModal(true);
                    setPostIdToDelete(post._id);
                  }}
                  className="font-medium bg-rose-500 hover:bg-rose-900 transition text-white p-1.5 rounded-md  cursor-pointer"
                >
                  Delete
                </span>
              </Table.Cell>
              <Table.Cell>
                <Link
                  className="bg-teal-500 hover:bg-teal-900 transition dark:bg-[#a5f3fc] dark:text-black text-white p-1.5 rounded-md hover:underline cursor-pointer"
                  to={`/update-post/${post._id}`}
                >
                  <span>Edit</span>
                </Link>
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
        onConfirm={handleDeletePost}
        title={"Delete Posts"}
      />
    </>
  );
};

PostTable.propTypes = {
  userPosts: PropTypes.array.isRequired,
  showMore: PropTypes.bool.isRequired,
  handleShowMore: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
  handleDeletePost: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setPostIdToDelete: PropTypes.func.isRequired,
};

export default PostTable;
