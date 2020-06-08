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

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Layout className="bcu-article FatherContent">
                <Content style={{paddingTop: "40px"}}>
                    <Card title="What is digital signal processing?" className="HomePageCard-Full">
                        <p>Change one signal into another signal – filtering, generating control
                            commands, augmenting, enhancing, etc.</p>
                        <p>Interpret and extract information – speech recognition, image recognition,
                            machine learning</p>
                    </Card>
                    <Card title="Why do we need DSP? Can't we use analog analysis?" className="HomePageCard-Full">
                        <p>We can use the analog technology, but the digital one is more flexible and provides higher SNR during transmission and storage. Therefore, we use the digital one. However, this technology brings other problems and new areas. This is why we should study this course.
                        </p>
                    </Card>
                    <Card title="What is the operation sequence of digital processing" className="HomePageCard-Full">
                        <p>sampling in time domain -> DTFT -> sampling in frequency domain -> DFT -> FFT
                        </p>
                        <p>Finally, we can design filters based on the FFT we want</p>
                    </Card>
                </Content>
            </Layout>
        );
    }
}