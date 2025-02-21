const Sidebar = () => {
    return(
        <>
            <aside>
                <div className = "sidebar">
                    <div>
                        <h1 className = "SideH1">LOGO</h1>
                    </div>
                    <div>
                        <ul className="SideUl">
                            <li className="ForSideLi">Dashboard</li>
                            <li className="ForSideLi">Tasks</li>
                            <li className="ForSideLi">Pages</li>
                            <li className="ForSideLi">Apps</li>
                            <li className="ForSideLi">Gallary</li>
                            <li className="ForSideLi">Our Blog</li>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;