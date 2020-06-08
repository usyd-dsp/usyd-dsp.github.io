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

export class WK3 extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Layout className="bcu-article FatherContent">
                <Content className="SonContent">
                    <div className="blog-description" compile-html="description"><p>​​​​​​​<b>Syllabus</b></p><p>Laplace
                        transform for the continuous signals</p><p>Zeg transform for the discrete</p><p><br/></p><p><br/>
                    </p><p>Where does non-linearity come from if basic&nbsp;of&nbsp;physic is linear?</p><p><br/></p><p>
                        <b>Linear time-invariant system in the discrete form</b><br/></p><p><br/></p><p><b>Finite Impulse
                        Response System</b></p><p>FIR only depends on the input &lt;=&gt; no input no output</p><p><br/>
                    </p><p><b>Infinite Impulse Response System</b></p><p>The output alse depends on other previous
                        outputs. <span >Being infinite means the signal never dies</span></p><p>
                        <span ><span>The solution</span></span> is
                        the <span ><span
                        >particular solution</span></span> +<span > <span
                        >the homogenous solution</span></span></p><p><span
                        >Sometimes, FIR systems look like IIR systems but they are not.</span></p>
                        <p><br/></p><p>Eigenfunction: input -&gt; output = the scaled input</p><p><br/></p><p>Orthogonal f
                            fnfm = 0<br/></p><p><br/></p></div>
                </Content>
            </Layout>
        );
    }
}