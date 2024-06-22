
import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Planification des menus' },
    { id: 2, text: 'Approvisionnement et gestion des stocks' },
    { id: 3, text: 'Gestion du personnel' },
    { id: 4, text: 'Service à la clientèle' },
    { id: 5, text: 'Gestion des réservations' },
    { id: 6, text: 'Gestion des plannings' },
    { id: 7, text: 'Entretien et propreté' }
    // Ajoutez d'autres tâches initiales ici si nécessaire
  ]);

  const [newTaskText, setNewTaskText] = useState('');

  const addTask = () => {
    if (newTaskText.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        text: newTaskText
      };
      setTasks([...tasks, newTask]);
      setNewTaskText(''); // Efface le champ d'entrée après l'ajout
    }
  };

  const handleInputChange = (event) => {
    setNewTaskText(event.target.value);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleEditTask = (id) => {
    const updatedTaskText = prompt('Modifiez la tâche :', tasks.find(task => task.id === id).text);
    if (updatedTaskText !== null && updatedTaskText.trim() !== '') {
      const updatedTasks = tasks.map(task => {
        if (task.id === id) {
          return { ...task, text: updatedTaskText };
        }
        return task;
      });
      setTasks(updatedTasks);
    }
  };

  return (
    <section>
      <div id="general-box">
        <div className="title">
          <h1>PIZZORINO-TODO LIST</h1>
        </div>

        {tasks.map(task => (
          <div key={task.id} className="item">
            <p>{task.text}</p>
            <div className="buttons">
              <button className="button edit-button" onClick={() => handleEditTask(task.id)}>Edit</button>
              <button className="button delete-button" onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </div>
          </div>
        ))}

        <div className="item">
          <input
            type="text"
            id="task-input"
            placeholder="Nouvelle tâche..."
            value={newTaskText}
            onChange={handleInputChange}
          />
          <button className="button add-button" onClick={addTask}>Add</button>
        </div>

      </div>
    </section>
  );
}

export default App;
