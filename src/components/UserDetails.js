import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getAllGithubUsers, followers } from "../services/index";
import { findUser } from "../services";
import { Link } from "react-router-dom";
import Repo from "./Repo";

const UserDetails = (props) => {
  const params = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    findUser(params.username).then((data) => {
      setUser(data);
    });
  }, [params]);

  return (
    <>
    <table className="table table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>Username</th>
          <th>Address</th>
          <th>Followers</th>
          <th>Following</th>
          <th>Public Repos</th>
      
        </tr>
      </thead>
      <tbody>
      
            <tr>
                <td>{user?.id}</td>
                <td>{user?.login}</td>
                <td>{user?.location}</td>
  
                <td>

                {user?.followers}<br></br>
                  <Link to={`/users/followers`}>More Followers Details</Link>
            
                </td>
                <td>

                {user?.following}<br></br>
                  <Link to={`/users/following`}>More Following Details</Link>
                </td>
                <td>
                {user?.public_repos}<br></br>
                  <Link to={`/users/${user?.login}`}>Public Repos Details</Link>
                </td>
              </tr>
          
      </tbody>
    </table>
    </>
  );
};

export default UserDetails;