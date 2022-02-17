let jeidian = document.querySelector('.jeidian');//创建节点
clickme = document.querySelector('.clickme')//获取容器
let add = ()=>{
    let div = document.createElement('div');// 创建元素
    let text = document.createTextNode('这是一段文本');//创建文本元素
    div.appendChild(text)//将文本节点追加到元素节点中
    jeidian.appendChild(div)
}
let add1 = ()=>{
    document.write('Hello')//插入文档
}
let add2 = ()=>{
    let inp = document.createElement('input')
    inp.type = 'text'//改变元素的属性
    inp.value = '早上好'//改变元素的属性
    jeidian.appendChild(inp)
}
let add3 = ()=>{
    let div = document.createElement('div')
    let divtext = document.createTextNode('这是一段文本')
    div.appendChild(divtext)//将文本节点追加到元素节点中
    jeidian.insertBefore(div)//从前面插入元素
}
//时间函数
setTimeout(()=>{
    console.log('Hello')
},1000)//setTimeout用来设置函数的延迟
setInterval(() => {
    console.log('Hello')
},1000);//用setInterval来设置每几秒运行一次函数
