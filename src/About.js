import React from "react";
import { Router, useHistory, useLocation } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function About() {

    //const {state: stateFromHomePage}=useLocation();
    

    {
        const { state } = useLocation();
        const { push } = useHistory();



        return (
            <>
                <div className="text-center">
                    <h2>
                        <Link to="/">Item əlavə et</Link>
                    </h2>
                </div>

                <div className="App">
                    <div className="w-50 mx-auto d-flex justify-content-center row">
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Surname</th>
                                    <th>Salary</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {state.map((dataItem) => (
                                    <tr key={dataItem.id} className="my-2">
                                        <th scope="row">{dataItem.id}</th>
                                        <td>{dataItem.name}</td>
                                        <td>{dataItem.surname}</td>
                                        <td>{dataItem.salary}</td>
                                        <td></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>

                </div>
            </>
        );
    }
}
    export default About;