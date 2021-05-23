// import React,{useState,useEffect} from 'react';
// import Table from 'react-bootstrap/Table';
// import "../App.css";

// function Show() {
//     const [result, setResult] = useState([]);

//     // useEffect(() => {
//     //     console.log("running")
//     //     // const readAll = (e) => {
//     //     //     console.log("running")
//     //     //     fetch("http://localhost:5000/getAll")
//     //     //         .then(response => response.json())
//     //     //         .then(response => {
//     //     //             console.log(response);
//     //     //             setResult(response)
    
//     //     //         })
//     //     //         .catch(err => {
//     //     //             console.log(err);
//     //     //         });
    
//     //     // }
//     //   },[]);

//     const readAll = (e) => {
//         console.log("running")
//         fetch("http://localhost:5000/getAll")
//             .then(response => response.json())
//             .then(response => {
//                 console.log(response);
//                 setResult(response)

//             })
//             .catch(err => {
//                 console.log(err);
//             });

//     }
//     return (
//         <div className="admin-page">
//             <h3>Dashboard</h3>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>age</th>
//                         <th>email</th>
//                         <th>bloodGroup</th>
//                         <th>vaccine</th>
//                         <th>city</th>
//                         <th>hospital</th>
//                         <th>pincode</th>
//                         <th>phone</th>
//                         <th>Plasma</th>
//                         <th>dose1</th>
//                         <th>dose2</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         result.map((user, k) => {
//                             return (
//                                 <tr>
//                                     <td>{user.name}</td>
//                                     <td>{user.age}</td>
//                                     <td>{user.email}</td>
//                                     <td>{user.bloodGroup}</td>
//                                     <td>{user.vaccine}</td>
//                                     <td>{user.city}</td>
//                                     <td>{user.hospital}</td>
//                                     <td>{user.pincode}</td>
//                                     <td>{user.phone}</td>
//                                     <td>{String(user.donatePlasma)}</td>
//                                     <td>{String(user.dose1)}</td>
//                                     <td>{String(user.dose2)}</td>
//                                 </tr>
//                             )

//                         })
//                     }
//                 </tbody>
//             </Table>
//             <button onClick={()=>{readAll()}}>click</button>
//         </div>
//     )


// }

// export default Show



import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import "../App.css";
import Button from 'react-bootstrap/Button';
import { Form,Col} from "react-bootstrap";

function Show() {
    const [result, setResult] = useState([]);
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    const [login, setLogin] = useState(false)

    const changeText = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        console.log(user);

    }
    const onSubmit = (event) => {
        event.preventDefault();

        if (user.username === "admin" && user.password === "test1234") {
            setLogin(true);
            console.log(login)
        } else {
            setLogin(false);
            document.write("Invalid credentials");
        }

    }

    useEffect(() => {
        
            fetch(process.env.REACT_APP_API_URL+"/getAll")
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    setResult(response)
    
                })
                .catch(err => {
                    console.log(err);
                });

      },[]);

    // const readAll = (e) => {
    //     console.log("running")
    //     fetch("http://localhost:5000/getAll")
    //         .then(response => response.json())
    //         .then(response => {
    //             console.log(response);
    //             setResult(response)

    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });

    // }
    return (
        <div>
            <div style={{margin:"50px"}}>
            <Form>
                <Form.Row>
                <Form.Group as={Col} controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" name="username" value={user.username} onChange={changeText} placeholder="Enter username" />
                </Form.Group>

                <Form.Group as={Col} controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={user.password} onChange={changeText} placeholder="Password" />
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicButton">
                <Button variant="primary" type="submit" style={{marginTop:"32px"}} onClick={onSubmit}>
                    Login
                </Button>
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicButton">
                {login&&<p style={{color:'green', marginTop:"32px"}}>Sucessfully Signed in</p>}
                </Form.Group>
                </Form.Row>
            </Form>
        </div>
        {/* {login&&<p style={{color:'green'}}>Sucessfully Signed in</p>} */}
        {login&&<div className="admin-page">
            <h3>Dashboard</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Blood group</th>
                        <th>Vaccine Name</th>
                        <th>Ciity</th>
                        <th>Hospital</th>
                        <th>Pincode</th>
                        <th>Phone</th>
                        <th>Plasma Donation</th>
                        <th>Dose1</th>
                        <th>Dose2</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        result.map((user, k) => {
                            return (
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.email}</td>
                                    <td>{user.bloodGroup}</td>
                                    <td>{user.vaccine}</td>
                                    <td>{user.city}</td>
                                    <td>{user.hospital}</td>
                                    <td>{user.pincode}</td>
                                    <td>{user.phone}</td>
                                    <td>{String(user.donatePlasma)}</td>
                                    <td>{String(user.dose1)}</td>
                                    <td>{String(user.dose2)}</td>
                                </tr>
                            )

                        })
                    }
                </tbody>
            </Table>
            {/* <button onClick={()=>{readAll()}}>click</button> */}
        </div>}
        </div>
    )


}

export default Show


