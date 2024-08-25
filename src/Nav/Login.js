import { S3Client, ListBucketsCommand, GetObjectCommand } from "@aws-sdk/client-s3";

function Login () {
    
    const img_to_show= ()=>{
        "dd"
    }

    return(
        <div>
            <img src={img_to_show} alt="images"/>
        </div>
    );
}
export default Login;