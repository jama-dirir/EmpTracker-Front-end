import React from 'react'
import Projects from './projects'
import { Tabs } from 'antd';
const { TabPane } = Tabs;
function index() {
  return (
    <div>
     <Tabs>
        <TabPane tab="Projects" key="1">
          <Projects/>
        </TabPane>
        <TabPane tab="General" key="2">
          General
        </TabPane>
      </Tabs>
    </div>
  )
}

export default index
