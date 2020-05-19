export const Promotion = {
    id: '5',
    name: "升职",
    icon: "promotion",
    title:{
        type: "access",
        text: "每次部落战结束进行一次部落战评选"
    },
    details:[
        {
            title: "长老",
            contents: [
                "1.每赛季捐兵量达到100",
                { type: "danger", text: "2.本人不在罪人榜内"},
                { type: "danger", text: "成为长老后，达不到要求会被降职为成员"}
            ]
        },
        {
            title: "副首领",
            contents: [
                "1.加入QQ群",
                "2.每赛季捐兵量达到1000，部落战每次至少拿下3星",
                "3.部落竞赛分数>=3000",
                "4.满足以上条件后QQ群向首领索要副首领升职试卷（私聊），把答案私聊给首领。（本次考试开卷，可以上网查，限时24小时，超时视为失败）",
                { type: "warning", text: "考试内容仅限部落规定"},
                { type: "warning", text: "副首领升职考试全部答对才能升职，一旦失败，从失败之日起6个月内不得再次参加考试（所以考试前好好去网站学习部落规定）"},
                { type: "danger", text: "成为副首领后，达不到要求会被降职为长老"}
            ]
        }
    ]
};