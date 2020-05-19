export const Heroes =  {
    id: '6',
    name: "英雄榜",
    icon:"heroes",
    title:{
        type: "access",
        text: "奖励为本部落做出卓越贡献的玩家，奖励有：不限制捐收比、 永久长老、 永久副首领、 帮助建立其他最强王者分营（担任首领）、 给与QQ群管理身份。 加入QQ群后发自己头像，单独构造荣誉页面，让你的光辉形象永远存于世间，英雄永不朽！",
        style: {"display": "block", "textIndent":"25px"}
    },
    details: [
        {
            title: "英雄榜",
            titleStyle: {textAlign: "left", color: "rgb(60, 118, 61)", "fontWeight": "bolder"},
            titleStyleMobile: { background: "rgb(60, 118, 61)", color:'#FFF', "fontWeight": "bolder"},
            contents: [
                { type: "card-success", name: "本大神带你们这群猪（#PQGRYLJ8）", reasons:["勇于和违反规定的人斗争，永久副首领"] },
                { type: "card-success", name: "龙族（#LRP22Q0U0）", reasons:["遵守规定，在部落重建的黑暗时期不离不弃，破格提拔为副首领"] }
            ]
        }
    ]
};