import React from "react"
import "./css/Login.css"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { deleteErrorMessage, loginAsync } from "../../redux/auth/authSlice";

export default function Login(props) {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const message = useSelector(state => state.auth.message)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const user = useSelector(state => state.auth.user)


    React.useEffect(() => {
        dispatch(deleteErrorMessage())
    }, [dispatch])

    if (user && location.state?.next) {
        navigate(location.state.next)
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h1>Login</h1>
                <form noValidate onSubmit={handleSubmit((data) => {
                    dispatch(loginAsync({ username: data.username, password: data.password }))
                })}>
                    <label>
                        Username:
                        <input
                            id="username"
                            name="username"
                            type="text"
                            required
                            {...register("username", { required: "username is required" })}
                        />
                        {errors.username && <p className='error'>*{errors.username.message}</p>}
                    </label>
                    <label>
                        Password:
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            {...register("password", { required: "password is required" })}
                        />
                        {errors.password && <p className='error'>*{errors.password.message}</p>}
                    </label>

                    <div>
                        { message && <p className='error'>*{message}</p>}
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}