import "./App.css"

let Student=()=>{
    const student={
        name:'Manthan Shah',
        Course:'Information Technology',
        email:'ManthanShah@gmail.com',
        Skills:'HTML,CSS,JavaScript'
    };
    return    (
        <div className="student-card">
            <h2>Student Profile</h2>
            <p><b>Name:</b>{student.name}</p>
            <p><b>Course:</b>{student.Course}</p>
            <p><b>email:</b>{student.email}</p>
            <p><b>Skills:</b>{student.Skills}</p>
            <button>View Profile</button>
        </div>
    )
}

export default Student