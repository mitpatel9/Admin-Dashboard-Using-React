import React from 'react'
import "./Sidebar.css"

import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                   <li className="sidebarListItem active" >
                        <LineStyleIcon className='SidebarIcon'/>
                         Home
                    </li>
                   
                    <li className="sidebarListItem">
                        <TimelineIcon className='SidebarIcon' />
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUpIcon className='SidebarIcon' />
                        Sales
                    </li>
                </ul>
                </div>

                <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem " >
                        <PersonOutlineIcon className='SidebarIcon'/>
                        Users
                    </li>
                    <li className="sidebarListItem">
                        <StorefrontIcon className='SidebarIcon' />
                        Products
                    </li>
                    <li className="sidebarListItem">
                        <AttachMoneyIcon className='SidebarIcon' />
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <EqualizerIcon className='SidebarIcon' />
                        Reports
                    </li>
                </ul>
                </div>

                <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem " >
                        <MailOutlineIcon className='SidebarIcon'/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeedIcon className='SidebarIcon' />
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutlineIcon className='SidebarIcon' />
                        Messages
                    </li>
                </ul>
                </div>

                <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem " >
                        <WorkOutlineIcon className='SidebarIcon'/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <TimelineIcon className='SidebarIcon' />
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <ReportIcon className='SidebarIcon' />
                        Reports
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}
