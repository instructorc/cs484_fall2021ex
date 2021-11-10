import React, { Component } from "react";

class Task extends Component {
   state = {
     task: []
   };

   

   //Lifecyle method that triggers when component is mounted to DOM
   componentDidMount(){
      fetch("/input_task")
        .then(res => res.json())
        .then(task => this.setState({task}))

   }

   render() {
     let styles = {boxShadow: "3px 3px 10px black", margin: "20px", flex: "1 0 400px"};
      return <div style={{display: "flex", margin: "auto" }}> 
            {this.state.task.map(tasks =>
              <div key={tasks.id} style={styles}>
                <h3>{tasks.task_name}</h3>
                <p>{tasks.task_category}</p>
              </div>
            )}
            </div>;
   }
}

export default Task;
