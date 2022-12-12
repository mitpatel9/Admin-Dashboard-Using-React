import React from 'react'
import Chart from '../../component/chart/Chart'
import FeaturedInfo from '../../component/FeaturedInfo/FeaturedInfo'
import WidgetLg from '../../component/widgetLg/Widgetlg'
import WidgetSm from '../../component/widgetSm/WidgetSm'
import { UserData } from '../../DummyData'
import "./Home.css"

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart data={UserData} title="User Analytics" grid dataKey="ActiveUser"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}
