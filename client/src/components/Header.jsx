import React from 'react'
import TopMenu from './TopMenu';
import SideBar from './SideBar';

function Header() {
    return (
        <div>
            <header className="app-header fixed-top">
                {/* <!--//app-header-inner--> */}
                <TopMenu />
                {/* <!--//app-side panel--> */}
                <SideBar />
            </header>
            {/* <!--//app-header--> */}
        </div>
    )
}

export default Header