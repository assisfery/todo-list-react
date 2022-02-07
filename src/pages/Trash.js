import { useEffect, useState } from "react";

function Trash(){
    
    const [ todos, setTodos ] = useState([]);

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

    const deleteTodo = (id) => {        
        var copyTodosDifferent = todos.filter( (e) => e.id != id);
        setTodos(copyTodosDifferent);        
    }

    useEffect(() => {

        localStorage.setItem("todosStored", JSON.stringify(todos));
        
    }, [todos]);

    return (
        <main>
            <div className="container py-1">
                <div className="d-flex justify-content-between mb-2">
                    <h3>Deleted Tasks</h3>
                </div>
                <div>
                {
                    todos.map(
                        (t) =>
                            <div key={t.id}>
                            {
                                t.archived == true &&
                                <div className="alert alert-secondary d-flex justify-content-between">
                                    {t.description}
                                    <a href="#/" className="text-muted" onClick={ () => deleteTodo(t.id) }>
                                        <i className="fas fa-trash"></i>
                                    </a>
                                </div>
                            }
                            </div>
                    )
                }
                </div>

            </div>
        </main>
    );
}

export default Trash;