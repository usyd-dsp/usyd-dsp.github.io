import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
//引入antd
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
//引入样式
import "./pc.less";

/*** 子页面 ***/
import { HomePage } from "./pages/HomePage/HomePage";
import { Detail } from "./pages/Details/detail";
import { WK1} from "./pages/HomePage/WK1";
import { WK2} from "./pages/HomePage/WK2";
import { WK3} from "./pages/HomePage/WK3";
import { WK4} from "./pages/HomePage/WK4";
import { WK5} from "./pages/HomePage/WK5";
import { WK6} from "./pages/HomePage/WK6";
import { WK7} from "./pages/HomePage/WK7";
import { WK8} from "./pages/HomePage/WK8";
import { WK9} from "./pages/HomePage/WK9";
import { WK10} from "./pages/HomePage/WK10";
import { WK11} from "./pages/HomePage/WK11";

export class PC extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentClan: ['0'],
            currentChildPage: < HomePage/>
        };
    }

    render(){
        return (
            <Layout className="layout bcu-body">
                <Header className="bcu-header">
                    <span className="slogan">Digital Signal Process</span>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        selectedKeys={this.state.currentClan}
                        className="btns"
                        onSelect={(item, key, selectedKeys)=>this.chooseClan(item, key, selectedKeys)}
                    >
                        <Menu.Item key={0} onClick={(e)=>this.chooseClan(e)}>Guide</Menu.Item>
                        <Menu.Item key={1} onClick={(e)=>this.chooseClan(e)}>WK1</Menu.Item>
                        <Menu.Item key={2} onClick={(e)=>this.chooseClan(e)}>WK2</Menu.Item>
                        <Menu.Item key={3} onClick={(e)=>this.chooseClan(e)}>WK3</Menu.Item>
                        <Menu.Item key={4} onClick={(e)=>this.chooseClan(e)}>WK4</Menu.Item>
                        <Menu.Item key={5} onClick={(e)=>this.chooseClan(e)}>WK5</Menu.Item>
                        <Menu.Item key={6} onClick={(e)=>this.chooseClan(e)}>WK6</Menu.Item>
                        <Menu.Item key={7} onClick={(e)=>this.chooseClan(e)}>WK7</Menu.Item>
                        <Menu.Item key={8} onClick={(e)=>this.chooseClan(e)}>WK8</Menu.Item>
                        <Menu.Item key={9} onClick={(e)=>this.chooseClan(e)}>WK9</Menu.Item>
                        <Menu.Item key={10} onClick={(e)=>this.chooseClan(e)}>WK10</Menu.Item>
                        <Menu.Item key={11} onClick={(e)=>this.chooseClan(e)}>WK11</Menu.Item>
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
            case "0":
                // homePage
                this.state.currentChildPage = < HomePage/>;
                this.forceUpdate();
                break;
            case "1":
                // homePage
                this.state.currentChildPage = <WK1/>;
                this.forceUpdate();
                break;
            case "2":
                // detail Page
                this.state.currentChildPage = <WK2/>;
                    this.forceUpdate();
                break;
            case "3":
                // detail Page
                this.state.currentChildPage = <WK3/>;
                this.forceUpdate();
                break;
            case "4":
                // detail Page
                this.state.currentChildPage = <WK4/>;
                this.forceUpdate();
                break;
            case "5":
                // detail Page
                this.state.currentChildPage = <WK5/>;
                this.forceUpdate();
                break;
            case "6":
                // detail Page
                this.state.currentChildPage = <WK6/>;
                this.forceUpdate();
                break;
            case "7":
                // detail Page
                this.state.currentChildPage = <WK7/>;
                this.forceUpdate();
                break;
            case "8":
                // detail Page
                this.state.currentChildPage = <WK8/>;
                this.forceUpdate();
                break;
            case "9":
                // detail Page
                this.state.currentChildPage = <WK9/>;
                this.forceUpdate();
                break;
            case "10":
                // detail Page
                this.state.currentChildPage = <WK10/>;
                this.forceUpdate();
                break;
            case "11":
                // detail Page
                this.state.currentChildPage = <WK11/>;
                this.forceUpdate();
                break;
        }
    }
}