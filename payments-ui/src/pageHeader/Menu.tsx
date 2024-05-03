// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { LoginContext, LoginContextType, UserType } from "../../context/context";


const Menu = () : JSX.Element => {

    // const contextPointer = useContext<LoginContextType>(LoginContext);
    // const userDetails : UserType = contextPointer.user;


    return (
        <ul className="nav">
            <li>Find a transaction</li>
            <li>New transaction</li>
            {/* <li>{ userDetails.id === 0 ? <Link to="/signin">Sign In</Link> : userDetails.name } </li> */}
            {/* <li>{ userDetails.name === "" ? <Link to="/signin">Sign In</Link> : userDetails.name } </li> */}
            <li>Sign In </li>
        </ul>
    );
}

export default Menu;
