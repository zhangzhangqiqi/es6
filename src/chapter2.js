{
    //获取dom元素
    const inputObj = document.getElementById('input');
    const txtObj = document.getElementById('txt');

    //初始化代理对象
    let obj = {}

    //代理选项
    Object.defineProperty(obj, 'val', {
        get: function() {
            return inputObj.value;
        },
        set: function(nweVal) {
            inputObj.value = inputObj.value === nweVal ? inputObj.value : nweVal;
            txtObj.innerHTML = nweVal;
        },
    })
        txtObj.innerHTML = obj.val;

    //给input添加键盘事件
    inputObj.addEventListener('keyup', function(e) {
        obj.val = e.target.value;
    })

    obj.val = 1234567;
}