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

export class WK9 extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Layout className="bcu-article FatherContent">
                <Content className="SonContent">
                    <div className="blog-description" compile-html="description"><p><b>1. Noble property</b><br/></p>
                        <p>1) The filter before the compressor can be moved after the compressor.<br/></p><p>{" After the operation above, the filter in the new location will change from z -&gt; z^{M}"}<br/></p><p>2)
                            The filter after the expander&nbsp;can be moved before the expander&nbsp;&nbsp;</p><p>After
                            the operation above, the filter in the new location will change from z -&gt; {"z^{1 / L}"}<br/>
                        </p><p>sfs</p><p><br/></p><p>1.Polyphase Filters<br/></p><p>We can use z^{-1} to create delays and
                            use decimators to filter the overlapping to get the separate sequence&nbsp;in the time
                            domain.</p><p>Therefore, we can decompose a filter with a high power at z into several
                            filters whose z have the same small power. This is easy for us to realise those filters
                            physically!<br/></p><p><br/></p><p>2.Filter Banks<br/></p><p><b
                            ><span
                            >Filter banks are used all over the place, basically it’s taking the signal break into numbers of frequency bands and doing the operation on it.&nbsp;</span></b>
                        </p><p><b ><span
                            >One special case for the high pass filter in the selection: the result will be shifted in the inverted order!</span></b><br/>
                        </p><p><b ><span
                            >While the low pass selection does not have this trait!</span></b><br/>
                        </p> <p><br/></p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/bvNrvruL8Cg" frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        <p>3.Practical ADC/DAC<br/></p><p>3.1 ADC (using decimators)<br/></p><p>1) We need
                            an anti-aliasing filter before doing anything to the signal, but, if we oversample, the
                            requirement for that filter decrease. However, this causes a high data rate. This is a
                            trade-off!</p><p>2) In quantization, 1 more bit used, 6dB more increase in SNR</p><p>3) We
                            can use decimators to reduce noice variance</p><p>3.2 DAC (using intepolators)</p><p>1) We
                            just hold the value to fill the gap between two adjacent points.&nbsp;</p><p>2) Then we use
                            a reconstruction filter to get the output</p><p>3) In reality, the reconstruction has
                            overlapping in the frequency domain</p><p><br/></p></div>
                </Content>
            </Layout>
        );
    }
}