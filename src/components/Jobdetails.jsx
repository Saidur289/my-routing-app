import { useLoaderData, useNavigate } from "react-router-dom";


const Jobdetails = () => {
    const jobDetails = useLoaderData()
    const navigate = useNavigate()
    return (
        <div className="jobs-details">
            <p>My Id Number: {jobDetails.id}</p>
            <p>Name: {jobDetails.name}</p>
          <p><b>My Website: {jobDetails.website}</b></p> 
          <p>Phone: {jobDetails.phone}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci exercitationem et voluptate aperiam sed saepe provident facilis totam reprehenderit modi!</p>
          <button onClick={()=> navigate(-1)}>Go Back</button>
        </div>
    );
};

export default Jobdetails;
export const jobsDetailsLoader = async ({params}) => {
 const {id} = params;
 const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
 if(!res.ok){
    throw Error('could not found job details')
 }
 return res.json();
}