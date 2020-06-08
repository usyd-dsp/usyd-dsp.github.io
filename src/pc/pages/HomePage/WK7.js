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

export class WK7 extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Layout className="bcu-article FatherContent">
                <Content className="SonContent">
                    <div className="blog-description" compile-html="description"><p><b>Theme</b><br/></p><p>Basically,
                        this week is to give DFT a view of sampling DTFT</p><p><br/></p><p>1. Sampling DTFT</p>
                        <p>x[((n))N] = x[n] * delta[n - rN]&nbsp; &nbsp; &nbsp;(x[((n))N] is DFT, x[n] is DTFT)</p>
                        <p>However, this may cause aliasing if x[n]'s length is greater than N</p><p><br/></p><p>2. FFT
                            (odd part and even part)</p><p>1) We can divide the DFT calculation equation into 2 parts,
                            odd and even (the odd part has a twiddle factor as the coefficient). Therefore, we can
                            reduce the calculation by half. The time complexity of this is O(log2(n)).<br/></p><p>2) This
                            can be done by using two&nbsp;matrice. (<span ><span
                                >This is for circulation convolution!</span></span>)
                        </p><p><br/></p><p>3. Other concepts<br/></p><p><span>1) orthogonal transforms:&nbsp;</span>
                            <span>Discrete Cosine Transform</span>&nbsp;</p><p>2) <span ><span
                            >Before using DFT, use windowing!</span></span></p>
                        <p>3) <span>Zero filling actually is good</span> for resolution in
                            windowing in the frequency sepectrum<br/></p></div>
                </Content>
            </Layout>
        );
    }
}