import React from 'react';
import { Link } from "react-router-dom";
//antd
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { Card } from 'antd';
//引入svg
import { Svgs } from "../../../common/Svgs";
//引入数据
import { data } from "../../../data";

export class XDY extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rules: [],
            currentRuleName: null,
            currentRulePage: null,
        };
        //构造侧边栏
        data.rule.xdy.forEach((item, i)=>{
            //无链接
            this.state.rules.push( <Menu.Item key={item.id}><Svgs style={{width: "20px", display: "inline-block", verticalAlign:"middle", marginRight:"6px"}} type={item.icon}/>{ item.name }</Menu.Item>);
        });
    }

    //默认选择第一个
    componentWillMount(){
        this.chooseRule({key: "1"});
    }

    render(){
        return (
            <Layout className="bcu-article">
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        style={{ height: '100%', borderRight: 0 }}
                        onSelect={(item, key, selectedKeys)=>this.chooseRule(item)}
                    >
                        { this.state.rules }
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>兄弟营</Breadcrumb.Item>
                        <Breadcrumb.Item>{ this.state.currentRuleName }</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                        { this.state.currentRulePage }
                    </Content>
                </Layout>
            </Layout>
        );
    }

    /**
     * 选择规定
     */
    chooseRule = (item) => {
        //找到当前选择规定
        let curItem = null;
        data.rule.xdy.forEach((itm, i)=>{
            if(itm.id.toString() === item.key.toString()){
                curItem = itm;

            }
        });
        //设置当前的名字
        let name = curItem.name;
        this.setState({ currentRuleName: name });
        //清空子页面
        this.state.currentRulePage = [];
        //设置子页面标题
        if(curItem.title) {
            switch (typeof  curItem.title){
                case "string":
                    break;
                case "object":
                    switch (curItem.title.type){
                        case "danger":
                            this.state.currentRulePage.push(<div style={{borderRadius: "5px", color: "#a94442", background:"#f2dede", padding: "15px 32px", lineHeight:'26px', marginBottom: "20px"}}><span style={curItem.title.style}>{ curItem.title.text }</span></div>);
                            break;
                        case "access":
                            this.state.currentRulePage.push(<div style={{borderRadius: "5px", color: "#3c763d", background:"#dff0d8", padding: "15px 32px", lineHeight:'26px', marginBottom: "20px"}}><span style={curItem.title.style}>{ curItem.title.text }</span></div>);
                            break;
                    }
                    break;
            }
        }
        //设置子页面内容
        if(curItem.details){
            curItem.details.forEach((detail, detail_index)=>{
                //构造内容
                let contents = [];
                if(detail.contents && detail.contents.length && detail.contents.length > 0){
                    detail.contents.forEach((detailContent, detailContent_index)=>{
                        //根据内容操作
                        switch(typeof  detailContent){
                            case "string":
                                //构造文字
                                contents.push(<p key={detailContent_index}>{ detailContent }</p>);
                                break;
                            case "object":
                                //构造带效果的文字
                                if(detailContent.text){
                                    //增加文字颜色
                                    let tmpText = "";
                                    switch (detailContent.type){
                                        case 'danger':
                                            tmpText = <span style={{color: "#FFF", background:"#a94442", fontWeight:"bolder"}}>{ detailContent.text }</span>;
                                            break;
                                        case "warning":
                                            tmpText = <span style={{color: "#8a6d3b"}}>{ detailContent.text }</span>;
                                            break;
                                    }
                                    contents.push(<p key={detailContent_index}>{tmpText}</p>);
                                }
                                //构造子卡片
                                if(detailContent.type && detailContent.type.match(/card-\w/)){
                                    //构造样式
                                    let style = { "fontWeight": "bolder" };
                                    switch (detailContent.type){
                                        case 'card-danger':
                                            style.color = "#a94442";
                                            break;
                                        case 'card-warning':
                                            style.color = "#8a6d3b";
                                            break;
                                        case 'card-success':
                                            style.color = "#3C763D";
                                            break;
                                    }

                                    //构造卡片内容
                                    let cardText = [];
                                    detailContent.reasons.forEach((reason)=>{
                                        cardText.push(<p style={{ marginBottom: "6px" }}>{ reason }</p>);
                                    });
                                    //增加一个卡片
                                    contents.push(
                                        <span style={{ display:"inline-block", verticalAlign:"top", width: '20%', minWidth: "300px", padding: "20px" }}>
                                            <Card
                                                type="inner"
                                                title={ <div style={style}> { detailContent.name }</div> }
                                            >
                                                { cardText }
                                            </Card>
                                        </span>
                                    );
                                }
                                break;
                        }
                    });
                }
                this.state.currentRulePage.push(<Card title={<div style={detail.titleStyle}>{detail.title}</div>} key={detail_index} style={detail.contentContainerStyle} hoverable={ true } >{ contents }</Card>);
                this.state.currentRulePage.push(<br/>);
            })
        }
        //强制刷新
        this.forceUpdate();
    }
}