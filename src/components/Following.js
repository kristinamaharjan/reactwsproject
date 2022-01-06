
import React, {useEffect, useState} from 'react'
import {useParams, useSearchParams} from 'react-router-dom'
import {findUser} from '../services'
const Following=(props)=>{
    const params= useParams();
    const [user, setUser] = useState(null)
    useEffect(()=>{
        findUser(params.username).then(data=>{
            setUser(data);
        })
    },[params])
  
    return (
      <>
       <table className="table table-hover">
      <thead>
        <tr>
        <th>id</th>
          <th>Username</th>
          <th>Following</th>
      
        </tr>
      </thead>
      <tbody>
      
            <tr>
            <td>{user?.id}</td>
                <td>{user?.login}</td>
                <td>{user?.following}</td>
  
              </tr>
          
      </tbody>
    </table>
       </>)

}
export default Following;
