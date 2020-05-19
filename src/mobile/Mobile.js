import React from 'react';
//weui
import { Tab, TabBarItem, Article } from 'react-weui';
import { Footer,FooterText } from 'react-weui';
//svg
import { Svgs } from "../common/Svgs";
//引入样式
import "./mobile.less";
//引入兄弟营
import { XDY } from "./xdy/XDY";
//引入数据
import { data } from "../data";

export class Mobile extends React.Component{
    render(){
        return (
            <Tab type="tabbar">
                <TabBarItem icon={<Svgs type="clan-brother-icon" style={{width: '25px'}}/>} label="兄弟营">
                    <Article style={{padding: 0}}>
                        <XDY/>
                    </Article>
                </TabBarItem>
                <TabBarItem icon={<Svgs type="clan-old-icon" style={{width: '25px'}}/>} label="高手营">
                    <Article>
                        暂时无任何规定
                    </Article>
                </TabBarItem>
                <TabBarItem icon={<Svgs type="contact" style={{width: '25px'}}/>} label="联系方式">
                    <Article>
                        <h1>联系方式</h1>
                        <section>
                            <h2 className="title">QQ群</h2>
                            <p>一群： 594712902</p>
                        </section>
                        <Footer>
                            <FooterText>Copyright &copy; 2008-2018 最强王者联盟</FooterText>
                        </Footer>
                    </Article>
                </TabBarItem>
            </Tab>
        );
    }
}