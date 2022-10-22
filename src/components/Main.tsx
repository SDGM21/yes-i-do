import UserCards from "./UserCards";
const Main = (props:any) => {
    return ( <>
    <div>
        <div>
            <UserCards {...props}/>
        </div>
        </div></> );
}
 
export default Main;