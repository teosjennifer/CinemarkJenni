const logoutcontroller = {};

logoutcontroller.logout = async(req, res) => {
    res.clearCookie ("authToken");
    res.json({message: "Session closed"})

}
export default logoutcontroller;