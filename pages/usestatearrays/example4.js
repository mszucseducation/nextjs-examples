import { useState } from "react";

let teacherId = 0;

export default function List() {
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [teachers, setTeachers] = useState([]);

    return (
        <>
            <h1>Please enter a list of names</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Please enter a name"
            />
            <input
                value={department}
                onChange={e => setDepartment(e.target.value)}
                placeholder="Please enter a department"
            />

            <button onClick={() => {
                setName('');
                setDepartment('');
                teachers.push({
                    id: teacherId++,
                    name: name,
                    department: department
                });
                console.log(teachers);
            }}>Add</button>
            <ul>
                {
                    teachers.map(teacher => (
                        <li key={teacher.id}>{teacher.name} - {teacher.department}</li>
                    ))
                }
            </ul>
        </>
    )
}