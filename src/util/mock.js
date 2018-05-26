import Mock from "mockjs"

let arr1 = [
    {
        "image": "http://img5.imgtn.bdimg.com/it/u=415293130,2419074865&fm=27&gp=0.jpg",
        "nickname|5-7": '钩',
        "totle|1-50": 1,
    }
];

let arr2 = [
    {
        "class_name": "软件工程",
        "class_id": "04071602",
        "total": "200"
    }
];

let object = {
    "image": "http://img5.imgtn.bdimg.com/it/u=415293130,2419074865&fm=27&gp=0.jpg",
    "nickname": "萧瑾媗",
    "personal_rank": 1,
    "class_rank": 2,
    "openid": 23213213
};

module.export = {
    "aa": Mock.mock("http://culture.cn/aa", {
        "list|1-10": 1,
        "name": "@name"
    }),
    "bb": Mock.mock("http://culture.cn/bb", {
        "list|1-10": 1,
        "color": "@color"
    }),
    "todayNum": Mock.mock("http://culture.cn/gettodaynum", {
        "todayNum|40-60": 1
    }),
    "geren": Mock.mock("http://culture.cn/getGeren", {
        "data|30": arr1
    }),
    "getUserInfo": Mock.mock("http://culture.cn/getUserInfo", {
            "data": object
    }),
    "getBanji": Mock.mock("http://culture.cn/getBanji", {
        "data|15": arr2
    }),
    "getQuestion": Mock.mock("http://culture.cn/competition/getQuestion", {
            "data": {
                "title": "《静夜思》是唐代诗人李白所做的一首五言古诗，其中首联“床前明月光”的下一句是：李开复打开了发快递了快疯掉了开发里的四地欧弟范德萨范德萨发斯蒂芬斯",
                "choice0": "疑看大佛的卡佛打开佛的卡佛得开佛端口是地上霜",
                "choice1": "疑是地上霜",
                "choice2": "疑是地上鬼",
                "choice3": "疑是地上归",
                "answer": "疑是地上霜",
                "questionId": 3
            },
            "question_num|+1": 8
    }),
    "getAnswer": Mock.mock("http://culture.cn/getAnswer", {
        "answer": "A"
    }),
    // "huojiang": Mock.mock("http://culture.cn/huojiang", {
    //     "data": {
    //         "ok|1": true
    //     }
    // }),
    "lallala": Mock.mock("http://culture.cn/huojiang", {
        "data": "yes"
    })
}
