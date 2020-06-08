import React from 'react';
import { Link } from "react-router-dom";
//antd
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { Card } from 'antd';
//引入svg
import { Svgs } from "../../../common/Svgs";

export class Detail extends React.Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <Layout className="bcu-article">
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        style={{ height: '100%', borderRight: 0 }}
                        onSelect={(item, key, selectedKeys)=>this.chooseOne(item)}
                    >
                        <Menu.Item key={1}>Sampling</Menu.Item>
                        <Menu.Item key={1}>DTFT</Menu.Item>
                        <Menu.Item key={1}>DFT</Menu.Item>
                    </Menu>
                </Sider>
            </Layout>
        );
    };

    chooseOne = (item) => {
    };
}