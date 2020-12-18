
const Mock = require('mockjs');
var flowlist = [
    {
        "flowName": "source_sink_flow",
        "links": [
            {
                "name": "con_9",
                "source": "source_1",
                "sourceOutput": "output",
                "target": "filter_3",
                "targetInput": "input",
                "input": "input"
            },
            {
                "name": "con_10",
                "source": "filter_3",
                "sourceOutput": "output",
                "target": "sink_2",
                "targetInput": "input",
                "input": "input"
            }
        ],
        "steps": [
            {
                "id": "source_1",
                "name": "source",
                "type": "source",
                "x": 172,
                "y": 144,
                "stepSettings": {},
                "outputConfigurations": {
                    "output": []
                }
            },
            {
                "id": "sink_2",
                "name": "sink",
                "type": "sink",
                "x": 1075,
                "y": 221,
                "stepSettings": {},
                "inputConfigurations": {
                    "input": []
                }
            },
            {
                "id": "filter_3",
                "name": "filter",
                "type": "filter",
                "x": 588,
                "y": 266,
                "stepSettings": {},
                "inputConfigurations": {
                    "input": []
                },
                "outputConfigurations": {
                    "output": []
                }
            }
        ],
        "date": "2020-03-29 18:27:36",
        "matrix": "{\"x\":0,\"y\":0,\"scale\":1}",
        "id": 4
    },
    {
        "flowName": "join_flow",
        "links": [
            {
                "name": "con_185",
                "source": "source_2",
                "sourceOutput": "output",
                "target": "join_1",
                "targetInput": "left",
                "input": "left"
            },
            {
                "name": "con_186",
                "source": "source_3",
                "sourceOutput": "output",
                "target": "join_1",
                "targetInput": "right",
                "input": "right"
            },
            {
                "name": "con_190",
                "source": "join_1",
                "sourceOutput": "output",
                "target": "sink_4",
                "targetInput": "input",
                "input": "input"
            }
        ],
        "steps": [
            {
                "id": "join_1",
                "name": "join",
                "type": "join",
                "x": 514,
                "y": 179,
                "stepSettings": {},
                "inputConfigurations": {
                    "input": []
                },
                "outputConfigurations": {
                    "output": []
                }
            },
            {
                "id": "source_2",
                "name": "source",
                "type": "source",
                "x": 155,
                "y": 94,
                "stepSettings": {},
                "outputConfigurations": {
                    "output": []
                }
            },
            {
                "id": "source_3",
                "name": "source",
                "type": "source",
                "x": 146,
                "y": 211,
                "stepSettings": {},
                "outputConfigurations": {
                    "output": []
                }
            },
            {
                "id": "sink_4",
                "name": "sink",
                "type": "sink",
                "x": 855,
                "y": 222,
                "stepSettings": {},
                "inputConfigurations": {
                    "input": []
                }
            }
        ],
        "date": "2020-03-29 18:23:46",
        "matrix": "{\"x\":-8,\"y\":-2,\"scale\":1}",
        "id": 5
    },
    {
        "flowName": "aggregate_flow",
        "links": [
            {
                "name": "con_43",
                "source": "dummy_source_7",
                "sourceOutput": "output",
                "target": "sql_6",
                "targetInput": "input",
                "input": "input"
            },
            {
                "name": "con_44",
                "source": "sql_6",
                "sourceOutput": "output",
                "target": "lookup_3",
                "targetInput": "input",
                "input": "input"
            },
            {
                "name": "con_45",
                "source": "lookup_3",
                "sourceOutput": "output",
                "target": "transform_8",
                "targetInput": "input",
                "input": "input"
            },
            {
                "name": "con_46",
                "source": "transform_8",
                "sourceOutput": "output",
                "target": "join_2",
                "targetInput": "left",
                "input": "left"
            },
            {
                "name": "con_47",
                "source": "source_10",
                "sourceOutput": "output",
                "target": "join_2",
                "targetInput": "right",
                "input": "right"
            },
            {
                "name": "con_48",
                "source": "join_2",
                "sourceOutput": "output",
                "target": "filter_5",
                "targetInput": "input",
                "input": "input"
            },
            {
                "name": "con_49",
                "source": "filter_5",
                "sourceOutput": "output",
                "target": "aggregate_1",
                "targetInput": "input",
                "input": "input"
            },
            {
                "name": "con_50",
                "source": "aggregate_1",
                "sourceOutput": "output",
                "target": "sql_9",
                "targetInput": "input",
                "input": "input"
            },
            {
                "name": "con_51",
                "source": "sql_9",
                "sourceOutput": "output",
                "target": "transform_4",
                "targetInput": "input",
                "input": "input"
            },
            {
                "name": "con_52",
                "source": "transform_4",
                "sourceOutput": "output",
                "target": "sink_11",
                "targetInput": "input",
                "input": "input"
            }
        ],
        "steps": [
            {
                "id": "aggregate_1",
                "name": "aggregate",
                "type": "aggregate",
                "x": 544,
                "y": 269,
                "stepSettings": {},
                "inputConfigurations": {
                    "input": []
                },
                "outputConfigurations": {
                    "output": []
                }
            },
            {
                "id": "join_2",
                "name": "join",
                "type": "join",
                "x": 656,
                "y": 60,
                "stepSettings": {},
                "inputConfigurations": {
                    "input": []
                },
                "outputConfigurations": {
                    "output": []
                }
            },
            {
                "id": "lookup_3",
                "name": "lookup",
                "type": "lookup",
                "x": 311,
                "y": 164,
                "stepSettings": {},
                "inputConfigurations": {
                    "input": []
                },
                "outputConfigurations": {
                    "output": []
                }
            },
            {
                "id": "transform_4",
                "name": "transform",
                "type": "transform",
                "x": 928,
                "y": 242,
                "stepSettings": {},
                "inputConfigurations": {
                    "input": []
                },
                "outputConfigurations": {
                    "output": []
                }
            },
            {
                "id": "filter_5",
                "name": "filter",
                "type": "filter",
                "x": 980,
                "y": 59,
                "stepSettings": {},
                "inputConfigurations": {
                    "input": []
                },
                "outputConfigurations": {
                    "output": []
                }
            },
            {
                "id": "sql_6",
                "name": "sql",
                "type": "sql",
                "x": 88,
                "y": 311,
                "stepSettings": {},
                "inputConfigurations": {
                    "input": []
                },
                "outputConfigurations": {
                    "output": []
                }
            },
            {
                "id": "dummy_source_7",
                "name": "dummy_source",
                "type": "source_dummy",
                "x": 63,
                "y": 108,
                "stepSettings": {
                    "dataType": "userClick",
                    "storage": "DUMMY"
                },
                "outputConfigurations": {
                    "output": []
                }
            },
            {
                "id": "transform_8",
                "name": "transform",
                "type": "transform",
                "x": 347,
                "y": 303,
                "stepSettings": {},
                "inputConfigurations": {
                    "input": []
                },
                "outputConfigurations": {
                    "output": []
                }
            },
            {
                "id": "sql_9",
                "name": "sql",
                "type": "sql",
                "x": 811,
                "y": 398,
                "stepSettings": {},
                "inputConfigurations": {
                    "input": []
                },
                "outputConfigurations": {
                    "output": []
                }
            },
            {
                "id": "source_10",
                "name": "source",
                "type": "source",
                "x": 22,
                "y": 460,
                "stepSettings": {},
                "outputConfigurations": {
                    "output": []
                }
            },
            {
                "id": "sink_11",
                "name": "sink",
                "type": "sink",
                "x": 1208,
                "y": 334,
                "stepSettings": {},
                "inputConfigurations": {
                    "input": []
                }
            }
        ],
        "date": "2020-03-29 18:27:17",
        "matrix": "{\"x\":-7,\"y\":40,\"scale\":1}",
        "id": 6
    }
];

var steplist = [
    {
        "id": "source",
        "name": "source",
        "type": "source",
        "tags": [
            "IO",
            "rtcflow"
        ],
        "stepSettings": {},
        "outputConfigurations": {
            "output": [
                {
                    "column": "",
                    "type": "",
                    "alias": "",
                    "description": ""
                }
            ]
        }
    },
    {
        "id": "dummy_source",
        "name": "dummy_source",
        "type": "source_dummy",
        "tags": [
            "IO",
            "rtcflow"
        ],
        "stepSettings": {
            "dataType": "userClick",
            "storage": "DUMMY"
        },
        "outputConfigurations": {
            "output": [
                {
                    "column": "",
                    "type": "",
                    "alias": "",
                    "description": ""
                }
            ]
        }
    },
    {
        "id": "filter",
        "name": "filter",
        "type": "filter",
        "tags": [
            "Transform",
            "rtcflow"
        ],
        "stepSettings": {},
        "inputConfigurations": {
            "input": [
                {
                    "column": "",
                    "type": "",
                    "alias": "",
                    "description": ""
                }
            ]
        },
        "outputConfigurations": {
            "output": [
                {
                    "column": "",
                    "type": "",
                    "alias": "",
                    "description": ""
                }
            ]
        }
    },
    {
        "id": "join",
        "name": "join",
        "type": "join",
        "tags": [
            "Join",
            "rtcflow"
        ],
        "stepSettings": {},
        "inputConfigurations": {
            "left": [
                {
                    "column": "",
                    "type": "",
                    "alias": "",
                    "description": ""
                }
            ],
            "right": [
                {
                    "column": "",
                    "type": "",
                    "alias": "",
                    "description": ""
                }
            ]
        },
        "outputConfigurations": {
            "output": [
                {
                    "column": "",
                    "type": "",
                    "alias": "",
                    "description": ""
                }
            ]
        }
    },
    {
        "id": "aggregate",
        "name": "aggregate",
        "type": "aggregate",
        "tags": [
            "Group",
            "rtcflow"
        ],
        "stepSettings": {},
        "inputConfigurations": {
            "input": [
                {
                    "column": "",
                    "type": "",
                    "alias": "",
                    "description": ""
                }
            ]
        },
        "outputConfigurations": {
            "output": [
                {
                    "column": "",
                    "type": "",
                    "alias": "",
                    "description": ""
                }
            ]
        }
    },
    {
        "id": "transform",
        "name": "transform",
        "type": "transform",
        "tags": [
            "Transform",
            "rtcflow"
        ],
        "stepSettings": {},
        "inputConfigurations": {
            "input": [
                {
                    "column": "",
                    "type": "",
                    "alias": "",
                    "description": ""
                }
            ]
        },
        "outputConfigurations": {
            "output": [
                {
                    "column": "",
                    "type": "",
                    "alias": "",
                    "description": ""
                }
            ]
        }
    },
    {
        "id": "sql",
        "name": "sql",
        "type": "sql",
        "tags": [
            "Transform",
            "rtcflow"
        ],
        "stepSettings": {},
        "inputConfigurations": {
            "input": [
                {
                    "column": "",
                    "type": "",
                    "alias": "",
                    "description": ""
                }
            ]
        },
        "outputConfigurations": {
            "output": [
                {
                    "column": "",
                    "type": "",
                    "alias": "",
                    "description": ""
                }
            ]
        }
    },
    {
        "id": "lookup",
        "name": "lookup",
        "type": "lookup",
        "tags": [
            "Join",
            "rtcflow"
        ],
        "stepSettings": {},
        "inputConfigurations": {
            "input": [
                {
                    "column": "",
                    "type": "",
                    "alias": "",
                    "description": ""
                }
            ]
        },
        "outputConfigurations": {
            "output": [
                {
                    "column": "",
                    "type": "",
                    "alias": "",
                    "description": ""
                }
            ]
        }
    },
    {
        "id": "sink",
        "name": "sink",
        "type": "sink",
        "tags": [
            "IO",
            "rtcflow"
        ],
        "stepSettings": {},
        "inputConfigurations": {
            "input": [
                {
                    "column": "",
                    "type": "",
                    "alias": "",
                    "description": ""
                }
            ]
        }
    },
    {
        "id": "split",
        "name": "split",
        "type": "split",
        "tags": [
            "Set",
            "rtcflow"
        ],
        "stepSettings": {},
        "inputConfigurations": {
            "input": [
                {
                    "column": "",
                    "type": "",
                    "alias": "",
                    "description": ""
                }
            ]
        },
        "outputConfigurations": {
            "output": [
                {
                    "column": "",
                    "type": "",
                    "alias": "",
                    "description": ""
                }
            ]
        }
    }
]


module.exports = [
    // mock get all routes form server
    // steplist
    {
        url: '/steplist',
        type: 'get',
        response: _ => {
            return {
                code: 20000,
                data: steplist
            }
        }
    },
    // list
    {
        url: '/flowlist',
        type: 'get',
        response: _ => {
            return {
                code: 20000,
                data: flowlist
            }
        }
    },
    //add
    {
        url: '/add/flow',
        type: 'post',
        response: {
            code: 20000,
            data: {
                key: Mock.mock('@integer(300, 5000)')
            }
        }
    },
    // modify
    {
        url: '/modify/flow/[A-Za-z0-9]',
        type: 'put',
        response: {
            code: 20000,
            data: {
                status: 'success'
            }
        }
    },
    //delete
    {
        url: '/del/flow/[A-Za-z0-9]',
        type: 'delete',
        response: {
            code: 20000,
            data: {
                status: 'success'
            }
        }
    }
]


