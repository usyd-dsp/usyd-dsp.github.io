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

export class WK6 extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Layout className="bcu-article FatherContent">
                <Content className="SonContent">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/mkGsMWi_j4Q" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    <div className="blog-description" compile-html="description"><p><b>1.Preview:</b></p><p>There is
                        another filter kind&nbsp; is called the inverse filter which can erase the effect from the
                        previous filter. Therefore, this&nbsp;inverse filter H(z) must be&nbsp; reciprocal of the
                        previous filter.&nbsp;</p><p><br/></p><p>Also, <span ><span
                        >if the previous is FIR, the inverse filter is IIR and vice versa.&nbsp;</span></span>
                    </p><p><br/></p><p><b>2.Content:</b></p><p>The <span ><span
                       >theme</span></span> of lecture 6 is <span
                       ><span>DFT</span></span> in the view
                        of <span><span
                            >discrete fourier series</span></span></p><p>2.1 Discrete
                        fourier series</p><p><br/></p><p>2.2 DFT Tricks</p><p>2.2.1 Zero Padding.</p><p><b>The Theory</b>
                    </p><p>In the DFT, the frequency step between two adjacent point is fs/N (where fs is the sampling
                        frequency, N is the samples we take in time domain and the samples in 2 <span
                            >π</span> &nbsp;in
                        the frequency domain). Therefore, we can <span >increase fs to improve the frequency resolution!</span>&nbsp;
                    </p><p><b>The Operation</b></p><p>To increase sampling frequency, we should add more points (but
                        with 0 value) among two originally adjacent points. This is called Zero Padding.</p>
                        <p>2.2.2&nbsp; <span>DFT Properties</span><br/>
                            1)&nbsp; <span>Circular Folding </span><br/>
                        </p><p><span>DFT[x((n))N] = X[k]N,&nbsp;DFT[x((-n))N] = X[-k]N</span><br/></p><p>
                            <span>2)&nbsp;</span> <span>Conjugation</span><br/></p><p>
                            <span>DFT[x*((n))N] = X*[-k]N</span><br/>
                            3)&nbsp;&nbsp;<span>Circular Shift (as DTFT, but the base is the twiddle factor)</span><br/>
                        </p><p><span>&nbsp;</span>4)&nbsp; <span>Parseval Identity</span><br/></p><p><span>We can do replace x[n] and X[k] by their square in the reverse DFT. This is for the analysis in the power spectrum</span><br/>
                            <span>&nbsp;</span><br/>
                        </p><p>2.3 Two method to calculate DTFT using DFT</p><p>Overlap save and overlap add</p><p><br/>
                        </p><p><b>3. Other Import Defination</b></p><p><span>3.1 N</span><span>-point DFT represents a finite-duration sequence of length </span><span>N</span><span>, </span><span>x</span><span>[</span><span>n</span><span>]</span><span>&nbsp;</span><span>must be zero outside the interval </span><span
                            >0 </span><span>≤ </span><span>n </span><span>≤ </span><span>N </span><span>- </span><span
                           >1</span><br/><br/></p><p><br/></p><p>
                            <br/></p></div>
                </Content>
            </Layout>
        );
    }
}