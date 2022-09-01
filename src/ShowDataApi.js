import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useHistory} from "react-router-dom";
import { cardService } from "./components/APIs/Services/Cards";

function ShowDataApi() {

    const [post, setPosts] = React.useState([]);
    const { push } = useHistory();

    const setId=(postId)=>{
        push("/ForComment", postId);
    }

    React.useEffect(() => {
        cardService.getAllPosts().then(({ data }) => setPosts(data))
    }, [])
    return (
        <>
            <Container>
                <h1 className="text-center mt-4 mb-4"> API data</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>userId</th>
                            <th>title</th>
                            <th>body</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {post.map(({id, userId, title, body}) => (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{userId}</td>
                                <td>{title}</td>
                                <td>{body}</td>
                                <td><Button onClick={()=>setId(id)}>comment</Button></td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default ShowDataApi;