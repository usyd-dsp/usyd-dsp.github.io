import React from 'react';
import { Link } from "react-router-dom";
//antd
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { Card } from 'antd';
//引入svg
import { Svgs } from "../../../common/Svgs";
//引入css
import "./HomePage.less";

export class WK1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Layout className="bcu-article FatherContent">
                <Content className="SonContent">
                    <div className="blog-description" compile-html="description">
                        <p>
                            To be honest, I have done the digital signal process before, which is filtering ECG out of noise signals. Those noise signal includes inside electrical interference and outside human body friction. Unfortunately, the work I did is not good enough to support patients. Therefore, hope I can build a better process than before after finishing this course.
                        </p>
                        <p><br/></p>
                        <p><b><span style={{color:"#c0171b"}}>Why use digital signals?</span></b>
                    </p><p><span style={{color:"#567f26"}}>1. Digital signals are better manipulated than analog signals. Consider the design time cost, circuit complexity, etc..</span>
                    </p><p><span style={{color:"#567f26"}}>2. The digital process can be combined with mature algorithm development in Maths &amp; Computer Science.</span>
                    </p><p><span style={{color:"#567f26"}}>&nbsp;</span><span style={{color:"#567f26"}}>&nbsp;</span>​​​​​​​</p>
                        <p><span style={{color:"#567f26"}}>&nbsp;</span> <span style={{color:"#c0171b"}}><b>What can’t we do yet with signal processing?</b></span>
                        </p><p><i><span style={{fontSize:"12px"}}><span style={{backgroundColor:"#faf163"}}>Answer 1,2 are from the book The Book of Why while the other is my own thoughts</span></span></i>
                        </p><p><span>&nbsp;</span>1. Non-causal systems (humans doesn't have non-causal models or tools)
                        </p><p>2. Weakly connected phenomena</p><p>3. Lack of data situations</p></div>
                </Content>
            </Layout>
        );
    }
}