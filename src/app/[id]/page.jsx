import Details from "@/components/PostData/Details";

  

 
const page = ({params}) => { 
    return (
        <div>
             <Details id={params.id}></Details>
        </div>
    );
};

export default page;