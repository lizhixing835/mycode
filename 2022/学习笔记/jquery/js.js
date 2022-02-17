//Dom的对象和jQuery的对象是不同的,
//Dom对象获取的是一个对象,jQuery对象获取的是一个集合
let Domdiv = document.querySelector('.mydiv')//Dom对象
let jquerydiv = $('.mydiv')//jQuery对象
//用Dom获取一个不存在的元素会反一个null值,而jQuery获取一个不存在的元素会反一个空集

/*=============================*/

//jQuery对象与Dom对象的互相转换
let changeDom = $('Domdiv')//Dom对象转换成jQuery对象,用$()进行包装即可
let changejQuery = jquerydiv[0]//jQuery对象转换成Dom对象,获取包装集对象中指定下标的元素

//Jquery选择器

//1.jQuery基础选择器

let jqueryid = $('#id')//id选择器，如果有多个相同的id会以第一个为准
let jqueryclass = $('.mydiv')//class选择器，如果有多个相同的class会全部选择
let jquerysu = $('div')//元素选择器
let jqueryall = $('*')//页面的所有元素
let jquery = $('元素，id，class')//组合选择器

//2.jquery层次选择器 格式基本为$("元素 and 指定元素")
let hdjquery = $('.mydiv div')//后代选择器
let zdjquery = $('mydiv > div')//子代选择器
let zdjquery2 = $('mydiv + div')//相邻选择器
let zdjquery3 = $('mydiv ~ div')//同辈选择器


//3.jquery表单选择器
let bdjquery = $('表单的种类')//jQuery的表单选择器,注意:如果是选择:input会同时匹配input，textarea，select，button元素


//4.jquery Dom操作(只适用于jQuery)
/*
属性的分类：
          1.固定属性：如id，name，style，class等
          2.返回值是boolean的属性：checked，selected，disabled
          3.自定义属性:用户自己定义的属性
*/
//4.1获取属性 attr和prop没区别
let check = $('#dxk1').attr('id')
console.log(check)
let check2 = $('#dxk2').prop('id')
console.log(check2)
//返回值是boolean的属性(元素没有设置属性) attr会返回实际值，prop会返回boolean值
let check3 = $('#dxk1').attr('checked');//undefined
console.log(check3)
let check4 = $('#dxk2').prop('checked');//false
console.log(check4)
//自定义属性 atter可获取，但prop不可获取
let check5 = $('#dxk1').attr('lzx')
let check6 = $('#dxk1').prop('lzx')

//4.2设置属性
//固有属性
$('#dxk1').attr('value','2')
$('#dxk1').prop('value','3')
//修改boolean属性
$('#dxk1').attr('checked','checked')
$('#dxk2').prop('checked',true)
//移除属性
$('#dxk1').removeAttr('checked')


//4.3设置元素的样式
let ys = $('.mydiv').attr('class');//获取属性值
$('.mydiv').attr('class','mydiv1')//修改属性
$('.mydiv1').css('font-size','20px')//添加样式
$('.mydiv1').css({'font-size':'20px','color':'blue'})//添加样式
$('.mydiv1').addClass('red')//添加样式名
$('.mydiv1').removeClass("red")//删除样式名

//4.4操作元素的内容
//操作元素内容,包括html标签(只适用于非表单元素)
$('.mydiv1').html()//获取指定元素里的HTML内容
$('.mydiv1').html('Hello')//改变指定元素里的HTML内容
//操作元素的文本内容,不识别HTML标签(只适用于非表单元素)
$('.mydiv1').text()//获取指定元素的文本内容
$('.mydiv1').text('HEllo world')//修改指定元素的文本内容
//操作表单元素的内容
$('#input_1').val()//获取表单元素的内容
$('#input_1').val('不需要')//更改表单元素的内容

//4.5jquery创建元素和添加元素

//在jquery中创建元素

let jquerycont = $("<div>Hello world</div>") //可以为字符串,HTML内容
let jquerytext1 = $('.text1')
//添加元素
let fun1 = ()=>{
    //在指定元素的内部的在最前面追加内容
    //指定元素.prepend(内容)
    jquerytext1.prepend(jquerycont)
    //$(内容).prependTo(指定元素)
    $(jquerycont).prependTo(jquerytext1)
}
let fun2 = ()=>{
    //在指定元素的内部的在最后面追加内容
    //指定元素.append(内容)
    jquerytext1.append(jquerycont)
    //$(内容).appendTo(指定元素)
    $(jquerycont).appendTo(jquerytext1)
}
let fun3 = ()=>{
    //在指定元素的内部的在前面追加内容
    //指定元素.before(内容)
    jquerytext1.before(jquerycont)
}
let fun4 = ()=>{
    //在指定元素的内部的在后面追加内容
    //指定元素.after(内容)
    jquerytext1.after(jquerycont)
}
//注：如果添加以有元素的话，会把原来的内容移动到指定位置(效果相当与剪切)

//删除元素
let fun5 = ()=>{
    //指定元素.remove() 效果为删除元素以其对应的子元素，标签和内容一起删除
    jquerytext1.remove()
}

//遍历元素 index获取遍历元素的文本,element,this获取遍历元素的Dom对象
  $('.greee').each((index,element)=>{
      console.log(index)
      console.log(element)
  })
//jquery ready加载事件(预加载事件 类似Dom的load事件但ready可以添加多个事件)
$(document).ready(()=>{
    console.log('页面加载完毕')
})
$(()=>{
    console.log('页面加载完毕')
})//简写

//jquery的绑定事件

//绑定单个事件
/**
 语法：$("指定元素").事件类型(fun)
 */
 $(".greee").mousedown(()=>{
    console.log('点击事件')
})

//绑定多个事件

/**
 * 语法:$("指定元素").事件类型(fun).事件类型(fun).....
 */
 $(".greee").mousedown(()=>{
    console.log('点击事件')
}).mouseover(()=>{
    console.log('你鼠标离开了我')
})

