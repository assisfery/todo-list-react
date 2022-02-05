import { useEffect, useState } from "react";

function Home(){
    
    const [ todos, setTodos ] = useState([]);

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
                <h3>My Tasks</h3>
                {
                    todos.map(
                        (t) => 
                            <div className="alert alert-secondary" key={t.id}>
                                {t.description}
                            </div>
                    )
                }
            </div>
        </main>
    );
}

export default Home;