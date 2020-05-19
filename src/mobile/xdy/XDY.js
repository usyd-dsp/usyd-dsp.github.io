import React from 'react';
//weui
import { Tab, NavBar, NavBarItem, Article } from 'react-weui';
import {
    Cells,
    CellsTitle,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
} from 'react-weui';
//antd
import { Layout } from 'antd';
import { Menu } from 'antd';
const { Sider } = Layout;
//引入数据
import { data } from "../../data";
//引入svg
import { Svgs } from "../../common/Svgs";

export class XDY extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: null,
            sidebars: [],
            currentRulePage: []
        };

        //构造navbar
        data.rule.xdy.forEach((item, i)=>{
            //无链接
            this.state.sidebars.push(<Menu.Item key={item.id} style={{margin:0, position: 'relative', height: '50px'}}>
                <div style={{ position:'absolute', top:0, left:0, right:0, bottom:0, lineHeight:"50px", textAlign:"center"}}>
                    <Svgs style={{display:"inline-block", width: "25px", height: '34px',verticalAlign: "middle"}} type={item.icon}/>
                </div>
            </Menu.Item>);
        });
    }
    componentWillMount(){
        this.chooseRule("1");
    }

    /**
     * 构造界面
     */
    render(){
        return (
            <Layout>
                <div className="bcu-mobile-header">{ this.state.title }</div>
                <Sider className="bcu-mobile-sidebar" width={50}>
                    <Menu
                        mode="inline"
                        theme="dark"
                        defaultSelectedKeys={['1']}
                        style={{ height: '100%', borderRight: 0 }}
                        onSelect={(item, key, selectedKeys)=>this.chooseRule(item.key)}
                    >
                        {this.state.sidebars}
                    </Menu>
                </Sider>
                <div className="bcu-mobile-body">
                    { this.state.currentRulePage }
                </div>
            </Layout>
        );
    }

    /**
     * 选择规则
     * @id 规定的id
     */
    chooseRule = (id) =>{
        //找到这一个规定
        let curRule = null;
        data.rule.xdy.forEach((itm, i)=>{
            if(itm.id.toString() === id.toString()){
                curRule = itm;
            }
        });
        //修改标题
        this.state.title = curRule.name;
        /*** 修改内容 ***/
        //清空
        this.state.currentRulePage = [];
        //设置子页面标题
        if(curRule.title) {
            switch (typeof  curRule.title){
                case "string":
                    break;
                case "object":
                    switch (curRule.title.type){
                        case "danger":
                            this.state.currentRulePage.push(<div style={{color: "#a94442", background:"#f2dede", padding: "5px 10px", lineHeight:'20px', marginBottom: "20px"}}><span style={curRule.title.style}>{ curRule.title.text }</span></div>);
                            break;
                        case "access":
                            this.state.currentRulePage.push(<div style={{color: "#3c763d", background:"#dff0d8", padding: "5px 10px", lineHeight:'20px', marginBottom: "20px"}}><span style={curRule.title.style}>{ curRule.title.text }</span></div>);
                            break;
                    }
                    break;
            }
        }
        //设置子页面内容
        if(curRule.details){
            curRule.details.forEach((detail, detail_index)=>{
                //不合理的数据不构造
                if(!detail.contents || !detail.contents.length || detail.contents.length <= 0){
                    return;
                }
                //数据合理继续构造
                //构造内容
                let contents = [];
                detail.contents.forEach((detailContent, detailContent_index)=>{
                    //根据内容操作
                    switch(typeof  detailContent){
                        case "string":
                            //构造文字
                            contents.push(
                                <Cell>
                                    <CellBody>{ detailContent }</CellBody>
                                </Cell>
                            );
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
                                contents.push(<Cell><CellBody>{ tmpText }</CellBody></Cell>);
                            }
                            //构造子卡片
                            if(detailContent.type && detailContent.type.match(/card-\w/)){
                                console.log("构造子卡片");
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
                                console.log(style);
                                //构造卡片内容
                                let cardText = [];
                                detailContent.reasons.forEach((reason)=>{
                                    cardText.push(<p style={{ marginBottom: "6px" }}>{ reason }</p>);
                                });
                                //增加一个卡片
                                contents.push(
                                    <Cell>
                                        <CellBody>
                                            <div style={style}> { detailContent.name }</div>
                                            { cardText }
                                        </CellBody>
                                    </Cell>
                                );
                            }
                            break;
                    }
                });
                this.state.currentRulePage.push(<CellsTitle style={detail.titleStyleMobile}>{detail.title}</CellsTitle>);
                this.state.currentRulePage.push(<Cells>{ contents }</Cells>);
            });
        }

        //刷新
        this.forceUpdate();
    }
}