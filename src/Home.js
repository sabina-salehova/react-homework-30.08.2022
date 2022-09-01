import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory} from "react-router-dom";
import ShowDataApi from "./ShowDataApi";

function Home() {

    const [data, setData] = React.useState([]);

    const { push } = useHistory();

    const [form, setForm] = React.useState({
        id: 0,
        name: '',
        surname: '',
        salary: ''
    });

    const saveItem = () => {

        if (form.name === '' || form.surname === '' || form.salary === '') { alert('Butun deyerleri daxil edin'); return; }

        if (Number(form.salary) < 1) { alert('emek haqqi 0-dan boyuk olmalidir'); return; }

        data.push({
            id: data.length === 0 ? 1 : Number(data[data.length - 1].id + 1),
            name: form.name,
            surname: form.surname,
            salary: form.salary
        })
        localStorage.setItem('data', JSON.stringify(data));

        push("/About", data);
    }
    const showItems = () => {
        localStorage.setItem('data', JSON.stringify(data));
        push("/About", data);
    }

    React.useEffect(() => {
        const list = localStorage.getItem('data') ?? [];
        setData(Array.isArray(list) ? [] : JSON.parse(list));
    }, []);

    return (
        <>
            <section>
                <div className="text-center mt-4">
                    <h2 onClick={showItems}>
                        <Link to="/About">Items table</Link>
                    </h2>
                </div>
                <Form className="py-1 my-5 mx-auto d-flex justify-content-center">
                    <label className="ps-4 pe-2">Name: </label>
                    <input type="text" onChange={(event) => setForm({ ...form, name: event.target.value })} value={form.name} />

                    <label className="ps-4 pe-2">Surname: </label>
                    <input type="text" onChange={(event) => setForm({ ...form, surname: event.target.value })} value={form.surname} />

                    <label className="ps-4 pe-2">Salary: </label>
                    <input type="number" onChange={(event) => setForm({ ...form, salary: event.target.value })} value={form.salary} />

                    <Button className="ms-4 fw-bold btn btn-success py-1 px-3" variant="success" onClick={saveItem} type="number">
                        add
                    </Button>
                </Form>
            </section>
            <section>                
                <ShowDataApi/>
            </section>
        </>
    );
}

export default Home;