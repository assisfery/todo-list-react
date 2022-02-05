import { useEffect, useState } from "react";
import { Modal } from 'react-bootstrap';

function Home(){
    
    const [ todos, setTodos ] = useState([]);

    const [show, setShow] = useState(false);
    const [ description, setDescription ] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {

        var todosStored = localStorage.getItem("todosStored");

        if(todosStored)
            setTodos(JSON.parse(todosStored));
        else
            setTodos([
                { id: 1, description: "todo sample" },
                { id: 2, description: "todo sample 2" },
            ]);
        
    }, []);

    const addTodo = () => {

        setTodos(            
            [...todos, ...[{
                    id: Math.floor(Math.random()*1000),
                    description: description
                }]
            ]
        );

        setDescription("");
        setShow(false);       
    
    }

    useEffect(() => {

        localStorage.setItem("todosStored", JSON.stringify(todos));
        
    }, [todos]);

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
                        <form className="text-center">
                            <textarea className="form-control my-2" rows="3" onChange={ (e) => setDescription(e.target.value) }></textarea>
                            <button className="btn btn-primary rounded-pill" type="button" onClick={ addTodo }>Confirm</button>
                        </form>
                    </Modal.Body>
                </Modal>

            </div>
        </main>
    );
}

export default Home;