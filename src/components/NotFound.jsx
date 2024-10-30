import { useNavigate } from "react-router-dom";


const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h2>404 | Page Not Found</h2>
            <button className="btn" onClick={() => navigate('/')}>Go To HomePage</button>
            
        </div>
    );
};

export default NotFound;