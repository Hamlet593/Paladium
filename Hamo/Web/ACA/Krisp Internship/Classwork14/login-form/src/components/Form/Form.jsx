export default function MakeForm({handleSetUserName, handleSetPassword, handleSubmit}) {
    return (
        <div className="container">
            <h1>Input type</h1>
            <input type='text' placeholder="type userName" onChange={handleSetUserName} />
            <input type='text' placeholder="type password" onChange={handleSetPassword} />
            <button onClick={handleSubmit} >Submit</button>
        </div>
    )
}