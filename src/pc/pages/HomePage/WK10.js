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

export class WK10 extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Layout className="bcu-article FatherContent">
                <Content className="SonContent">
                    <div className="blog-description" compile-html="description">

                        <p>1.Filter Block Diagrams</p><p>There
                        are 2. Actually,<span
                           ><span
                            > form 2 is better</span></span>, because we can save the
                        number of filters to get a clear circuit!</p><p><br/></p>

                        <p>2.Signal Flow Graphs</p><p>There are
                        3 connections shown in&nbsp;WK10_3forms.jpg</p><p><br/></p><p>3.Linear Phase Signal</p>
                        <p>Symmetrical for odd N and even N, anit-symetrical for&nbsp;odd N and even N</p><p><br/></p>
                        <p>4. FIR&nbsp;Design ​​​​​​​</p><p><span >We just need to follow those mature algorithms to do the desgin</span>
                        </p><p>1) Window Design</p><p>2) Parks-McClellan</p></div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/5JpqbuRCjEE" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/qo6H7p37aDw" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/0gNAeilMNLI" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </Content>
            </Layout>
        );
    }
}