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

export class WK11 extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Layout className="bcu-article FatherContent">
                <Content className="SonContent">
                    <div className="blog-content">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/N1eraFmDw1M" frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        <div className="blog-description" compile-html="description"><p>1. IIR Design<br/></p><p>1) <span
                            ><span
                            >IIR is just the&nbsp;reciprocal of FIR</span></span></p>
                            <p>2) After getting the complex plane result, we can use<span ><span
                                > z = e^{"{sT}"} </span></span>to get the IIR equation (s =
                                Omega*T, Omega is the angle speed in Fourier transform)&nbsp;</p><p>3) Special Filter
                                Types</p><p>&nbsp; &nbsp; &nbsp; &nbsp;Digital Resonators: symetrical in the real but
                                rotationally symmetric in the imaginary</p><p>&nbsp; &nbsp; &nbsp; &nbsp;Notch Filters:
                                same as above, but its real frequency spectrum's peaks is at the bottom</p>
                            <p>&nbsp; &nbsp; &nbsp; &nbsp;All Pass: it works as its name</p><p><br/></p><p>2. STFT</p><p>
                                <span>It comes from Heisenberg Boxes to separate the calculation into several blocks.</span><span>&nbsp;</span><br/></p>
                        </div>
                    </div>
                </Content>
            </Layout>
        );
    }
}