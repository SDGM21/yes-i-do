const UserCards = (props:AnalyserNode) => {
    const user = "User"
    let online = true;

    return ( 
    <>
    <div>
        <div>
            <img src="#" alt={online ? "online" : "offline"} />
        </div>
        <div>
            <img src="#" alt={user} />
        </div>
    </div>
    </> );
}
 
export default UserCards;