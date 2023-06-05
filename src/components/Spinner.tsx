import "../App.css";

type SpinnerProps = {
    message?: string
}

const Spinner = ({message}:SpinnerProps) => {
    return (
    <div className='loader'>
        <div className='spinner'></div>
        {message && <p>{message}</p>}
    </div>
    );
}

export default Spinner;