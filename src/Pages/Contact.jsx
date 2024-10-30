import { useNavigate } from "react-router-dom";


const Contact = () => {
    const navigate = useNavigate()
    
    return (
        <div>
            <h4>This is contact page</h4>
            <div className="btn-container">
                <button onClick={() => navigate('info')}>Contact</button>
                <button onClick={() => navigate('form')}>Form</button>
            </div>
        </div>
    );
};

export default Contact;