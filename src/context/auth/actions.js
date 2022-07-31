import { BASE_URL } from "../api/context";

//LOGIN
export async function loginUser(dispatch, loginPayload) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginPayload),
    };

    try {
        dispatch({ type: 'REQUEST_LOGIN' });
        let response = await fetch(`${BASE_URL}/user/login`, requestOptions);
        let data = await response.json();

        if (data) {
            dispatch({ type: 'LOGIN_SUCCESS', payload: data.data });
            localStorage.setItem('currentUser', JSON.stringify(data.data));
            return data.data
        }

        dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
        return;
    } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', error: error });
    }
}

//LOGOUT
export async function logout(dispatch) {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
}

export const signIn = async (dispatch, signInPayload) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signInPayload),
    };


    try {
        let response = await fetch(`${BASE_URL}/user`, requestOptions);
        let data = await response.json();
        if (data) {
            dispatch({ type: 'REQUEST_LOGIN' });
            response = await fetch(`${BASE_URL}/user/login`, requestOptions);
            let loginRes = await response.json();
            if (loginRes) {
                dispatch({ type: 'LOGIN_SUCCESS', payload: loginRes.data });
                localStorage.setItem('currentUser', JSON.stringify(loginRes.data));
                return loginRes.data
            }
        }


        dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
        return;
    } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', error: error });
    }
}
