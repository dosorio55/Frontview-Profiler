import { useState } from 'react';
import { BASE_URL } from '../../../../../../../context/api/context';
import './AddProject.scss'

const INITIAL_STATE = {

    projectName: '',
    imageLink: '',
    description: ''

};

const AddProject = ({ modalSetter, getProjects, setEditMode }) => {

    const jwtToken = JSON.parse(localStorage.getItem("currentUser")).token


    const [formProject, setformProject] = useState(INITIAL_STATE);

    const handleInput = (ev) => {
        const { name, value } = ev.target;
        setformProject({ ...formProject, [name]: value });
    };


    const submitForm = (event) => {
        event.preventDefault(event)
        fetch(`${BASE_URL}/project`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwtToken}`
            },
            body: JSON.stringify(formProject)
        }).finally(() => {
            console.log(`${formProject}`)
            modalSetter(false)
            getProjects()
        })
        setEditMode()
    }

    return (
        <div className=' addProjectContainer'>
            <div >
                    <h2>Add new project</h2>
                    <form onSubmit={submitForm}>

                        <label>
                            <p>Project Name</p>
                            <input type="text" name='projectName' value={formProject.projectName} onChange={handleInput} />
                        </label>
                        <label>
                            <p>image link</p>
                            <input type="text" name='imageLink' value={formProject.imageLink} onChange={handleInput} />
                        </label>
                        <label>
                            <p>brief Description</p>
                            <textarea name="description" id="" cols="0" rows="10" value={formProject.description} onChange={handleInput} ></textarea>
                        </label>
                        <button className='btn btn-primary' type='submit' >Save project</button>
                    </form>

            </div>
        </div>
    )
}

export default AddProject