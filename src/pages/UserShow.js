import React, {useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import Layout from "../components/Layout"
 
  
function UserShow() {
    const [id, setId] = useState(useParams().id)
    const [user, setUser] = useState({name:'', email:''})
 
    useEffect(() => {
        axios.get(`/user/${id}`)
        .then(function (response) {
            setUser(response.data.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }, [])
  
    return (
        <Layout>
           <div className="container">
            <h2 className="text-center mt-5 mb-3">Show User</h2>
                <div className="card">
                    <div className="card-header">
                        <Link 
                            className="btn btn-outline-info float-right"
                            to="/"> View All Users
                        </Link>
                    </div>
                    <div className="card-body">
                        <b className="text-muted">Name:</b>
                        <p>{user.name}</p>
                        <b className="text-muted">Email:</b>
                        <p>{user.email}</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
  
export default UserShow;