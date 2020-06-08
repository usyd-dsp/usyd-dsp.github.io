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

export class WK4 extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Layout className="bcu-article FatherContent">
                <Content className="SonContent">
                    <div data-hook="block-text-view" ng-show="view_mode"
                         className="view-mode-text text-area first-focused-object" compile-html="TextViewOnly"
                         aria-hidden="false">
                        <ul></ul>
                        <p><br/></p><p><u>A recommendation from Craig&nbsp;&nbsp;"Thinking, fast and slow".</u></p>
                        <p>x[n]&lt;=&gt;X(e^jw)</p><p>{"x_e[n] &lt;=&gt; Re{X ^ jw}"}</p><p>x[n]=x_e[n]+x_o[n]</p>
                        <p>x_e[n]=1/2*(x[n]+x[-n])</p><p>x_o[n]=1/2*(x[n]=x[-n])</p><p><br/></p><p>TS:
                            x[n-n_d]&lt;=&gt;e^(-jwn_d)*X(e^jw)</p><p>FS: e^(jw_0n)*x[n] &lt;=&gt; X(e^(j(w-w_0)))</p>
                        <p><br/></p><p>The impulse response of an ideal low-pass filter:</p>
                        <p>h_LP[n]=sin(w_c*n)/(pi*n)&nbsp;</p><p><span
                            >&nbsp;</span><span >this is non-causal, truncate and shift fight to make it causal</span>
                        </p><p>truncation: add a window&nbsp; to cut it</p><p>h`_LP[n]=w[n]*h_LP[n]</p><p><br/></p>
                        <ul>
                            <li><b><span >Random signals ( Random process)</span></b>
                            </li>
                        </ul>
                        <p>This is the case in many real-world situations.</p><p>finite energy and the DTFN, Z
                            exist.</p><p><br/></p>
                        <ul>
                            <li><b><span >Probability distribution</span></b></li>
                        </ul>
                        <p>Probability Mass Function:&nbsp; &nbsp; p_xn( x,n )</p>
                        <p>Mean:&nbsp; &nbsp; m_xn=E[x_n] &nbsp;</p><p>Linear
                            independence:&nbsp; &nbsp; E[x_n,y_m]=E[x_n]*E[y_m]</p><p>Statistic independence&nbsp;: <u>This
                            is much more stronger</u></p><p><br/></p>
                        <ul>
                            <li><b><span >Autocorrelation Sequence ( Between two same signals)</span></b>
                            </li>
                        </ul>
                        <p><br/></p>
                        <ul>
                            <li><b><span >Autocovariance sequence</span></b></li>
                        </ul>
                        <p>The mean value is taken out. (when mean is removed, the correlation changed)</p><p>from the
                            covariance, we can get the most efficient Basis functions-orthogonal&nbsp;</p><p>Statistic:
                            P.C.A ( principal component analysis)</p><p>Engineering: K.L.T (Karhowen Loewe
                            Transform)</p>
                        <ul>
                            <li><b><span>Cross-Correlation of random signals</span></b></li>
                        </ul>
                        <p>​​​​​​​Between two random process:</p><p><br/></p>
                        <ul>
                            <li><b><span>Definition of Stationary Process:</span></b>
                            </li>
                        </ul>
                        <p><u>Strict Stationarity</u>: The statistical properties are invariant with respect to a shift
                            of the time origin.</p><p><u>Wide sense stationarity:</u></p><p>E[x_n] is independent of
                            n</p><p>​​​​​​​<u>WSS and LTI systems:</u></p><p>y[n] = sum(x[k]*h[n-k])</p><p>property 1:
                            m_y = m_x* sum(h[n])</p><p>property 2:&nbsp;</p><p>property 3</p><p><br/></p>
                        <ul>
                            <li><b>Wiener- Khintchine Theorem</b></li>
                        </ul>
                        <p>The DTFT of A.C. of x[n] equals to the |X(e^jw)|^2 = S(e^jw)<br/></p>
                        <ul>
                            <li><b>Z-transform</b></li>
                        </ul>
                        <p><br/></p>
                        <ul>
                            <li><b>z^n as an Eigenfunciton of the LTI system</b></li>
                        </ul>
                        <p>y[n] = sum(h[k]*z^(n-k)) = H(z)*z^n</p><p><br/></p>
                        <ul>
                            <li><b>Region of Convergence (ROC) --where dose z-transform exist??</b></li>
                        </ul>
                        <p><u>the right-sided sequence that only has values for n&gt;0 </u></p><p>x[n] = a^n*u[n]</p>
                        <p>X(z) = sum(a^n*z*(-n)) = sum((a/z)^n)</p><p><u>Gauss's trick:&nbsp; &nbsp;S=1+r+r^2...+r^n,
                            then S=1/(1-r)</u></p><p><b>Exterior to the circle with radius |a|=&gt;&nbsp;</b><u>DTFT
                            exist, contains unit circle</u></p><p>for n&lt;0</p><p>x[n]= -a^n*u[-n-1]</p><p>X(z) =
                            sum(-a^n*z^(-n)) = sum(-a^(-n)*z^n)&nbsp;</p><p>X(z) = 1/(1-a*z^-1) =&gt; |z|&lt;|a|</p>
                        <p>interior to the circle with radius |a|</p><p><u>Q: Does the DTFT exist? <b>A: no, dose not
                            contain the unit circle.</b></u></p><p>Meaning of&nbsp;stability:&nbsp; sum |h[n]| is
                            absolutely converged.&nbsp;</p><p>the unit circle must be inside the ROC</p>
                        <p>causality:&nbsp; z&gt;|r|</p><p ><span
                            ><b>Lab&nbsp;</b></span></p><p>Finished the Lab1 assignment. I start
                            to look at the extra lab question provided on canvas.</p><p><span
                            ><b>Tutorial</b></span></p><p>I start writing my tutorial solution
                            into latex version on overleaf. I used it before, so there is no difficulty for me to
                            formating my document. The only issue is to edit the equation in latex manner.</p><p>Here is
                            an easy way to type mathematical symbols. This online editor is very helpful when
                            transforming the symbols into latex codes.</p><p><a target="_blank" rel="noopener"
                                                                                href="https://www.codecogs.com/latex/eqneditor.php"
                                                                                data-cke-saved-href="https://www.codecogs.com/latex/eqneditor.php">https://www.codecogs.com/latex/eqneditor.php</a>
                        </p><p>To make the figure more clear, I use Matlab to generate the sequence in both time domain
                            and frequency domain.</p><p><br/></p></div>
                </Content>
            </Layout>
        );
    }
}