import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import usersDB from "../../db.json";

const Home = () => {
  const [users, setUser] = useState(usersDB.users);
  console.log(users.users);
  // useEffect(() => {
  //   loadUsers();
  // }, []);

  // const loadUsers = async () => {
  //   try {
  //     const result = await axios.get("http://localhost:3003/users");
  //     setUser(result.data.reverse());
  //   } catch (error) {
  //     console.error("Error loading users:", error);
  //     // Handle the error gracefully (e.g., display an error message to the user)
  //   }
  // };

  // const deleteUser = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:3003/users/${id}`);
  //     loadUsers();
  //   } catch (error) {
  //     console.error("Error deleting user:", error);
  //     // Handle the error gracefully (e.g., display an error message to the user)
  //   }
  // };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link class="btn btn-danger">Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
