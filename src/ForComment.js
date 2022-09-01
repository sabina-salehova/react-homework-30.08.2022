import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cardService } from "./components/APIs/Services/Cards";
import { Container, Table } from "react-bootstrap";

function ForComment() {

    const { state } = useLocation();

    const [comment, setComment] = React.useState([]);

    React.useEffect(() => {
        cardService.getCommentById(state).then(({ data }) => setComment(data))
    }, [])

    return (
        <>
            <Container>
                <div className="text-center my-5">
                    <h2>
                        <Link to="/">esas sehifeye qayit</Link>
                    </h2>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>PostId</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comment.map(({ id, postId, name, email, body }) => (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{postId}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{body}</td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default ForComment;