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

export class WK5 extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Layout className="bcu-article FatherContent">
                <Content className="SonContent">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/B4IyRw1zvvA" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    <div className="blog-description" compile-html="description"><p><b>Z-transform ROC</b></p><p>1) For
                        a system Y(z) = H(z)X(z), if this system is causal, the only thing that is sure is that <span
                            >H(z)&nbsp;is causal</span>,<span
                            ><span
                            > Y(z) and X(z) can be any type</span></span>.&nbsp;&nbsp;
                    </p><p>2) The ROC of&nbsp;&nbsp;Y(z) is the <span
                        >overlapping area</span> of H(z) and X(z).</p><p>3) For a signal
                        X(z) = X1(z) +&nbsp;X2(z) + ... +&nbsp;Xn(z), the ROC is the <span
                            >overlapping area</span> of&nbsp; X1(z), X2(z), ..., Xn(z)
                    </p><p><br/></p><p><b>What is the meaning of Z-transform?</b></p><p>For a LTI system, y[n] = H(z)z^n.
                        Therefore, z^n is the generic eigenfunction of LTI systems</p><p><br/></p><p><b>Inverse
                        Z-Transform</b></p><p><br/>1)&nbsp; <span>Partial Fraction</span><br/>2)&nbsp;
                        <span><span>A weired way (from tutorial)&nbsp;</span></span><br/></p>
                        <p>&nbsp; &nbsp; &nbsp;First, split all numerators(for example, 1 - z^-1 - z^-3 splits into 3
                            parts: 1, z^-1, z^-2)<br/></p><p>&nbsp; &nbsp; &nbsp;Second, use those numberators to&nbsp;do
                            the "time-shift" individually (for exampe, x[n - d] = z^-d X(z) )</p><p><br/></p></div>
                </Content>
            </Layout>
        );
    }
}