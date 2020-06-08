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

export class WK8 extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Layout className="bcu-article FatherContent">
                <Content className="SonContent">
                    <div className="blog-description" compile-html="description"><p>1. Sampling<br/></p><p><font
                        color="#000000" face="Arial"><span>1) Sampling causes duplicates in the frequency domain. Besides, the amplitude in the frequency domain multiplies by 1/Ts and the frequency axis shrinks by fs (fs is the sampling frequency and Ts is the sampling period).</span></font>
                    </p> <p>2) After sampling, we get DTFT and w (w is periodic in 2pi).&nbsp;</p><p>3) The w in DTFT is
                        Ts times of w in Fourier transform.</p><p>4) <span><span
                        >However, this may cause aliasing! </span></span>Therefore, we
                        must make sure the sampling frequency is at least 2&nbsp;times of the signal
                        frequency.&nbsp;&nbsp;Or we should use a filter to rule out those parts causing aliasing. This
                        is called&nbsp; <span>Shannon Sampling Theore</span><br/>
                            </p><p><br/></p><p>2.
                        Sampling Rate Change<br/></p><p><span><span
                        >This process happens in the receiver!&nbsp;</span></span></p>
                        <p>1) First, we can use compressor to downsample. However, this causes scaling of 1/M <b><span
                            ><span>in both amplitude and the frequency f,</span></span></b> and
                            shifting by 2pi/M. Therefore, aliasing may happen. To fix this, we need a filter <span
                                ><span >before </span></span>the
                            compressor.&nbsp;</p><p><span
                            >This filter and compressor is called&nbsp; DECIMATOR</span><br/>
                            </p><p>2) Also, we can
                            increase the sampling rate using expander. However, this squeeses the original frquency
                            spectrum more densely. Therefore, to extract the correct part to recover, we need a filter
                            to select which part we want. Therefore, we need a filter <span><span
                                >after</span></span> the expander.&nbsp;</p><p><span
                            >This filter and expander is called&nbsp; INTERPOLATO</span><br/>
                            </p><p><br/></p></div>
                </Content>
            </Layout>
        );
    }
}