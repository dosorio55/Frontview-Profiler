import React, { useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../context/api/context';
import './Form.scss'

//SE LLAMA FRONTVIEW
//SE LLAMA WINDVIEW


const INITIAL_STATE = {
  name: '',
  description: '',
  image: '',
  headline: '',
  work: '',
  email: '',
  phone: '',
  address: '',
  webpage: '',
  habilities: []
};

const Form = () => {

  const navitageForm = useNavigate();


  const [formsState, setFormsState] = useState(INITIAL_STATE)

  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setFormsState({ ...formsState, [name]: value });
    console.log(formsState)

  };

  const handleInput2 = (data) => {
    const value = data;
    console.log(value)
    setFormsState({ ...formsState, habilities: value });
  };

  const submitForm = (event) => {
    event.preventDefault(event)
    fetch(`${BASE_URL}/profiles/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formsState)
    }).then(() => {
      console.log(`the user ${formsState}`)
    })
    navitageForm('/profile')

    // console.log(formsState)

  }

  const initialState = 1;

  const reducer = (state, action) => {
    switch (action.type) {
      case 'next':
        return state + 1;
      case 'previous':
        return state - 1;
      case state === 3: return
      default: return state;
    }
  }


  const [state, dispatch] = useReducer(reducer, initialState);

  const [studyOpts, setStudyOpts] = useState(false);

  const [skills, setSkills] = useState([]);

  const addSkill = (ev) => {
    const event = ev.target.outerText
    const newList = [...skills]
    newList.push(event)
    setSkills(newList)

    handleInput2(newList)
  }

  const handleStudyOpts = () => {
    setStudyOpts(!studyOpts)
  }

  const skillsArray = ['React', 'Vue.js', 'Angular', 'Node', 'MongoDb']

  return (

    <div className='formContainer'>
      <div>

        <form onSubmit={submitForm}>
          {state === 1 &&
            <div>
              <h2>yourself</h2>
              <label>
                <p>name</p>
                <input type="text" name='name' value={formsState.name} onChange={handleInput} />
              </label>
              <label>
                <p>headline</p>
                <input type="text" name='headline' value={formsState.headline} onChange={handleInput} />
              </label>
              <label>
                <p>profile image</p>
                <input type="text" name='image' value={formsState.image} onChange={handleInput} />
              </label>
              <label>
                <p>describe yourself</p>
                <textarea name="description" id="" cols="0" rows="10" value={formsState.description} onChange={handleInput} ></textarea>
              </label>
            </div>}

          {/* PAGE 2 */}
          {state === 2 &&
            <div>
              <h2>Work experience</h2>
              <label>
                <p>Where do you currently work?</p>
                <input type="text" name='work' value={formsState.work} onChange={handleInput} />
              </label>
              <div className='container'>
                <p>Habilities</p>
                <div className="select-box">

                  <div className={studyOpts ? 'options-container options-container--active' : 'options-container'}>
                    {skillsArray.map((skill) => {
                      return <div key={skill} className="option" onClick={addSkill}>
                        <p>{skill}</p>
                      </div>
                    })}

                  </div>
                  <div onClick={handleStudyOpts} className='selected'>
                    prossional skills
                  </div>
                </div>

              </div>
              {skills.map((skill, key) => {
                return <p key={key}>{skill}</p>
              })}
              <div>
              </div>
            </div>
          }

          {/* page 3 */}
          {state === 3 &&
            <div>
              <h2>Contact info</h2>
              <label>
                <p>email</p>
                <input type="text" name='email' value={formsState.email} onChange={handleInput} />
              </label>
              <label>
                <p>phone number</p>
                <input type="text" name='phone' value={formsState.phone} onChange={handleInput} />
              </label>
              <label>
                <p>personal website</p>
                <input type="text" name='website' value={formsState.website} onChange={handleInput} />
              </label>
              <label>
                <p>address</p>
                <input type="text" name='address' value={formsState.address} onChange={handleInput} />
              </label>
            </div>

          }

          <div>
            {state === 3 && <button type="submit">Guardar Perfil</button>}
          </div>
        </form >
        {state !== 1 && <button onClick={() => dispatch({ type: 'previous' })}>previous</button>}
        {state !== 3 && <button onClick={() => dispatch({ type: 'next' })}>next</button>}
      </div>
    </div >
  )
}

export default Form