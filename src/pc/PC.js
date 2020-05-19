import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
//引入antd
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
//引入样式
import "./pc.less";
//引入数据
import { data } from "../data";
//兄弟营
import { XDY } from "./pages/xdy/XDY";

export class PC extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentClan: ['1'],
            currentChildPage: <XDY/>,
            clans: []
        };

    }
    /**
     * 将要构造界面时
     */
    componentWillMount(){
        //构造部落
        data.clans.forEach((item, i)=>{
            this.state.clans.push(<Menu.Item key={item.id} onClick={(e)=>this.chooseClan(e)}>{item.name}</Menu.Item>);
        });
        this.forceUpdate();
    }

    render(){
        return (
            <Layout className="layout bcu-body">
                <Header className="bcu-header">
                    <img className="logo" src="/img/coc.jpg" />
                    <span className="slogan">Digital Signal Process</span>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        selectedKeys={this.state.currentClan}
                        className="btns"
                        onSelect={(item, key, selectedKeys)=>this.chooseClan(item, key, selectedKeys)}
                    >
                        { this.state.clans }
                    </Menu>
                </Header>
                { this.state.currentChildPage }
                <Footer style={{background: "#001529", color:"#FFF"}}>
                    <span style={{fontWeight: "bold", marginRight:"10px"}}>Contact:</span>
                    <span style={{textIndent:"50px"}}>xiqu4237@uni.sydney.edu.au</span>
                </Footer>
            </Layout>
        );
    }

    /**
     * 选择部落
     * @index
     */
    chooseClan = (item, key, selectedKeys) => {
        //console.log("item = " + item + "  key=" + key + " selectKeys=" + selectedKeys);
        //console.log(item);
        //更改导航栏
        this.setState({currentClan: [item.key]});
        //更改子页面
        switch (item.key){
            case "1":
                //兄弟营
                this.state.currentChildPage = <XDY/>;
                this.forceUpdate();
                break;
            case "2":
                //养老营
                this.state.currentChildPage = null;
                this.forceUpdate();
                break;
        }
    }
}