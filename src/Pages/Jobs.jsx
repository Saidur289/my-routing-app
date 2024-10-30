import { Link, useLoaderData } from "react-router-dom";


const Jobs = () => {
    const jobData = useLoaderData();
    console.log(jobData);
    return (
        <div className="jobs">
            {
                jobData.slice(0,5).map((job) => {
                    return <Link key={job.id} to={job.id.toString()}> 
                    <p style={{fontWeight: 'bold'}}>{job.name}</p>
                    <p>{job.email}</p>


                    </Link>
                })
            }
            
        </div>
    );
};

export default Jobs;
export const jobsLoader = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json()
}