var WidgetConfig = {
    // 段落
    paragraph: {
        name: 'paragraph',
        dataConfig: {
            content: {
                type: 'input',
                name: 'content',
                desp: '内容',
                inputType: 'text'
            }
        },
        styleConfig: {
            size: ['width', 'height'],
            bg: ['bgColor'],
            border: ['borderStyle', 'borderWidth', 'borderColor'],
            font: ['fontSize', 'textAlign']
        }
    },

    // 图片
    image: {
        name: 'image',
        dataConfig: {
            src: {
                desp: '图片地址',
                type: 'input',
                inputType: 'link',
                name: 'src',
            }
        },
        styleConfig: {
            size: ['width', 'height'],
            bg: ['bgColor'],
            border: ['borderStyle', 'borderWidth', 'borderColor'],
            font: ['fontSize', 'textAlign']
        }
    }


}

var StyleConfig = {

    size: {
        width: {
            name: 'width',
            type: 'input',
            desp: '宽度',
            inputType: 'number'
        },
        height: {
            desp: '高度',
            name: 'height',
            type: 'input',
            inputType: 'number'
        }
    },
    bg: {
        bgColor: {
            desp: '背景颜色',
            name: 'bgColor',
            type: 'input',
            inputType: 'text'
        },
        bgSrc: {
            desp: '背景图片',
            type: 'input',
            inputType: 'link',
            name: 'bgSrc',
        }
    },
    border: {
        borderWidth: {
            desp: '边框宽度',
            name: 'borderWidth',
            type: 'input',
            inputType: 'text'
        },
        borderColor: {
            desp: '边框颜色',
            name: 'borderColor',
            type: 'input',
            inputType: 'text'
        },
        borderStyle: {
            desp: '边框样式',
            name: 'borderStyle',
            type: 'select',
            option: [

                {
                    value: 'solid',
                    desp: '实线'
                }, {
                    name: 'dashed',
                    desp: '虚线'
                }, {
                    name: 'dotted',
                    desp: '点线'
                }
            ]
        }
    },
    font: {
        fontColor: {
            desp: '颜色',
            name: 'textColor',
            type: 'input',
            inputType: 'text'
        },
        fontFamily: {
            desp: '字体',
            name: 'fontFamily',
            type: 'input',
            inputType: 'text'
        },
        fontSize: {
            desp: '大小',
            name: 'fontSize',
            type: 'input',
            inputType: 'number'
        },
        lineHeight: {
            desp: '行高',
            name: 'lineHeight',
            type: 'input',
            inputType: 'number'
        },
        fontStyle: {
            desp: '字体样式',
            name: 'fontStyle',
            type: 'select',
            option: [

                {
                    value: 'normal',
                    desp: '普通'
                }, {
                    name: 'italic',
                    desp: '斜体'
                }
            ]
        },
        textAlign: {
            desp: '对齐',
            name: 'textAlign',
            type: 'select',
            option: [

                {
                    value: 'left',
                    desp: '左对齐'
                }, {
                    name: 'center',
                    desp: '居中'
                }, {
                    name: 'right',
                    desp: '右对齐'
                }
            ]
        }
    }


}
