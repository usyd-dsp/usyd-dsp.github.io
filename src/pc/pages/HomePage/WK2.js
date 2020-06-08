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

export class WK2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            html: '<divclass="blog-description"compile-html="description"><p><spanstyle="color:#f7f7f7"><b><spanstyle="background-color:#c0171b">REVIEW:</span></b></span></p><p>1.Samplingrateforasinewaveshouldbefasterthantwiceofthesignalfrequency.Ifjusttwice,theresultmaybejust0</p><p>2.OrthogonalProperty:</p><p>&nbsp;&nbsp;Forsignalx1andx2,theintegralofx1timesx2fromt1tot2is0or1.</p><p>3.ContinuoussystemfiltersincludeRCcircuits.</p><p>4.Cos(t)ore^jwtareperodic!</p><p><br></p><p><b><spanstyle="color:#f7f7f7"><spanstyle="background-color:#924e0c">PeriodicProofProcess:</span></span></b></p><p>x[n+N]=x[N]</p><p><br></p><p><b><spanstyle="color:#f7f7f7"><spanstyle="background-color:#924e0c">Properties&nbsp;oftheDiscreteSystem&nbsp;</span></span></b></p><p>1.Causalty</p><p>2.Linearity</p><p>&nbsp;-superposition:T{x1[t1]&nbsp;+x2[t2]}=T{x1[t1]}+T{x2[t2]}=y[t1]+y[t2]</p><p>&nbsp;-homogenity:T{ax[t]}=aT{x[t]}=ay[t](<spanstyle="color:#c0171b">ax[t]doesnotmeanamplifytheinputatacertainmomentbuttheentireinputacrossthewholetimescope</span>)</p><p>3.memoryless:theoutputonlyreliesoncurrentinputs<spanstyle="background-color:#faf163">insteadofpastorfutureoutputs&nbsp;</span></p><p>4.Timeinvariant</p><p>5.BIBOStability</p><p><b><spanstyle="color:#f7f7f7"><spanstyle="background-color:#567f26">DiscreteSystemExamples:</span></span></b></p><p>1.Cumulativeadder:causal,linear;&nbsp;NOT&nbsp;memoryless</p><p>2.Compressor:causal,linear;NOTmemoryless</p><p>3.Medianfilter:non-linear</p><p><br></p><p><b><spanstyle="color:#f7f7f7"><spanstyle="background-color:#924e0c">CONVOLUTION&nbsp;</span></span></b></p><p>1.Direct:</p><p>2.SignalFolding</p><p>3.Tabular</p><p><spanstyle="color:#c0171b">Whydoweneed&nbsp;impulseresponseandconvolution?</span></p><p><spanstyle="color:#81bc3a">Convolutionisthewaytolinkunitimpulseresponsetotheresponseofanymomentinthissystem.</span></p><p><br></p><p>Taskstodo:</p></div>'

        }
    }


    render(){
        return(
            <Layout className="bcu-article FatherContent">
                <Content className="SonContent">
                    <div className="blog-description" compile-html="description">
                        <p><span ><b><span>REVIEW:</span></b></span></p><p>1. Sampling rate for a sine
                        wave should be faster than twice of the signal frequency. If just twice, the result may be just
                        0</p><p>2. Orthogonal Property:</p><p>&nbsp; &nbsp; For signal x1 and x2, the integral of x1
                        times x2 from t1 to t2 is 0 or 1.</p><p>3. Continuous system filters include RC circuits.</p>
                        <p>4. Cos(t) or e^jwt are perodic!</p><p><br/></p><p><b><span ><span
                            >Periodic Proof Process:</span></span></b></p><p>x[n + N] =
                            x[N]</p><p><br/></p><p><b><span ><span
                            >Properties&nbsp;of the Discrete System&nbsp;</span></span></b>
                        </p><p>1. Causalty</p><p>2. Linearity</p><p>{"- superposition: T{x1[t1] + x2[t2]} = T{x1[t1]} + T{x2[t2]} = y[t1] + y[t2]"}</p><p>&nbsp;- homogenity: {"T{ax[t]} = aT{x[t]} = ay[t]"}(<span >ax[t] does not mean amplify the input at a certain moment but the entire input across the whole time scope</span>)
                        </p><p>3. memoryless: the output only relies on current inputs <span
                            >instead of past or future outputs&nbsp;</span></p><p>4.
                            Time invariant</p><p>5. BIBO Stability</p><p><b><span ><span
                            >Discrete System Examples:</span></span></b></p><p>1.
                            Cumulative adder: causal, linear;&nbsp;NOT&nbsp;memoryless</p><p>2. Compressor: causal,
                            linear; NOT memoryless</p><p>3. Median filter: non-linear</p><p><br/></p><p><b><span
                            ><span>CONVOLUTION&nbsp;</span></span></b>
                        </p><p>1. Direct:</p><p>2. Signal Folding</p><p>3. Tabular</p><p><span >Why do we need &nbsp;impulse response and convolution?</span>
                        </p><p><span >Convolution is the way to link unit impulse response to the response of any moment in this system.</span>
                        </p></div>
                </Content>
            </Layout>
        );
    }
}