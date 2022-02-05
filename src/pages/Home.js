import { useEffect, useState } from "react";
import { Modal } from 'react-bootstrap';

function Home(){
    
    const [ todos, setTodos ] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {

        var todosStored = localStorage.getItem(todosStored);

        if(todosStored)
            setTodos(JSON.parse(todosStored));
        else
            setTodos([
                { id: 1, description: "todo sample" },
                { id: 2, description: "todo sample 2" },
            ]);
    }, []);

    return (
        <main>
            <div className="container py-1">
                <div className="d-flex justify-content-between mb-2">
                    <h3>My Tasks</h3>
                    <a href="#/" className="btn btn-primary rounded-pill" onClick={handleShow}>Add new todo</a>
                </div>
                <div>
                {
                    todos.map(
                        (t) => 
                            <div className="alert alert-secondary" key={t.id}>
                                {t.description}
                            </div>
                    )
                }
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new todo</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>
                </Modal>

            </div>
        </main>
    );
}

export default Home;