import Axios from 'axios'
import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL,  GET_ERROR} from './types'

const port = "https://gameserver-39qc.onrender.com"

export const loadUser = () => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_LOADING });
        const token = getState().user.token;
        const { data } = await Axios.get(`${port}/user/getuser`, { headers: { "x-auth-token": token } })
        dispatch({ type: USER_LOADED, payload: data })
    } catch (error) {
        dispatch({ type: AUTH_ERROR })

    }
}

export const userSign = (signdata) => async (dispatch) => {

    try {
        const { data } = await Axios.post(`${port}/user/signup`, signdata)
        dispatch({ type: REGISTER_SUCCESS, payload: data })
        
    } catch (error) {
        alert(error?.response?.data?.msg)

        dispatch({ type: REGISTER_FAIL })
        dispatch({ type: GET_ERROR, payload: error.response })
    }
}
export const loguser = (dat) => async (dispatch) => {
    try {
        const { data } = await Axios.post(`${port}/user/login`, dat)
        dispatch({ type: LOGIN_SUCCESS, payload: data })
    } catch (error) {
        alert(error?.response?.data?.msg)

        dispatch({ type: LOGIN_FAIL })
        dispatch({ type: GET_ERROR, payload: error.response })
    }
}

export const Logout =()=>async(dispatch)=>{
    try {
        await localStorage.removeItem('tokenmain')
        window.location.reload()
    } catch (error) {
        
    }
}
