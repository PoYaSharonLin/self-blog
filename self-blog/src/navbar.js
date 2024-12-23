const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1> Sharon's Blog </h1>
            <a href = "/"> Home </a>
            <a href = "/create" style ={{
                color: 'white',
                backgroundColor: '#f1356d',
                borderRadius: '8px'
            }}>New Blog </a>
        </div>
     );
}
 
export default Navbar;