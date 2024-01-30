import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import UserTable from "./UserTable";

const DashUsers = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`/api/user/getusers`);
        const data = await res.json();
        if (res.ok) {
          setUsers(data.users);
          if (data.users.length < 8) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUsers();
  }, []);

  const handleShowMore = async () => {
    const startIndex = users.length;
    try {
      const res = await fetch(
        `/api/user/getposts?userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUsers((prev) => [...prev, ...data.users]);
        if (data.users.length < 8) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  //   const handleDeleteUser = async () => {
  //     setShowModal(false);
  //     try {
  //       const res = await fetch(`/api/user/delete/${currentUser._id}`, {
  //         method: "DELETE",
  //       });
  //       const data = await res.json();
  //       if (!res.ok) {
  //         console.log(data.message);
  //       } else {
  //         setUsers((prev) => prev.filter((user) => user._id !== userIdToDelete));
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const handleDeleteUser = async () => {
    try {
      const res = await fetch(`/api/user/delete/${userIdToDelete}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        setUsers((prev) => prev.filter((user) => user._id !== userIdToDelete));
        setShowModal(false);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      {currentUser.isAdmin && users.length > 0 ? (
        <>
          <UserTable
            showModal={showModal}
            setShowModal={setShowModal}
            handleDeleteUser={handleDeleteUser}
            setUserIdToDelete={setUserIdToDelete}
            users={users}
            showMore={showMore}
            handleShowMore={handleShowMore}
          />
        </>
      ) : (
        <p>You have no Users</p>
      )}
    </div>
  );
};

export default DashUsers;
