import React, { useRef } from "react"
import "./Auth.css"

export const Register = (props) => {
    const name = useRef()
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/dissectologists?email=${email.current.value}`)
            .then(_ => _.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            existingUserCheck()
                .then(() => {
                    fetch("http://localhost:8088/dissectologists", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            password: password.current.value,
                            firstName: firstName.current.value,
                            lastName: lastName.current.value
                            // name: name.current.value
                            // name: `${firstName.current.value} ${lastName.current.value}`
                        })
                    })
                        .then(_ => _.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("app_user", createdUser.id)
                                props.history.push("/")
                            }
                        })
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">CREATE AN ACCOUNT</h1>
                {/* <fieldset>
                    <label htmlFor="name"> Name </label>
                    <input ref={name} type="text"
                        name="name"
                        className="form--controlAuth"
                        placeholder="name"
                        required autoFocus />
                </fieldset> */}
                <fieldset>
                    {/* <label htmlFor="firstName"> First Name </label> */}
                    <input ref={firstName} type="text"
                        name="firstName"
                        className="form--controlAuth"
                        placeholder="first name"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    {/* <label htmlFor="lastName"> Last Name </label> */}
                    <input ref={lastName} type="text"
                        name="lastName"
                        className="form--controlAuth"
                        placeholder="last name"
                        required />
                </fieldset>
                <fieldset>
                    {/* <label htmlFor="inputEmail"> Email Address </label> */}
                    <input ref={email} type="email"
                        name="email"
                        className="form--controlAuth"
                        placeholder="email address"
                        required />
                </fieldset>
                <fieldset>
                    {/* <label htmlFor="inputPassword"> Password </label> */}
                    <input ref={password} type="password"
                        name="password"
                        className="form--controlAuth"
                        placeholder="password"
                        required />
                </fieldset>
                <fieldset>
                    {/* <label htmlFor="verifyPassword"> Verify Password </label> */}
                    <input ref={verifyPassword} type="password"
                        name="verifyPassword"
                        className="form--controlAuth"
                        placeholder="verify password"
                        required />
                </fieldset>
                <fieldset>
                    <button type="submit">
                        SIGN UP
                    </button>
                </fieldset>
            </form>
        </main>
    )
}

