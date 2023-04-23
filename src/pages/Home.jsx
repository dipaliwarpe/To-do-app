import Todo from "../components/Todo/Todo";
import { Navbar, NavbarBrand } from 'reactstrap';



const Home = () => {


    return (
        <>
            {<Navbar color="dark" dark>
                <NavbarBrand>TODO List</NavbarBrand>
            </Navbar>
            }
            {<div className="mt-5">
                <Todo />
            </div>
            }
        </>
    )
};
export default Home;