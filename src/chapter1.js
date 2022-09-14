{
    //获取dom元素
    const inputObj = document.getElementById('input');
    const txtObj = document.getElementById('txt');

    //初始化代理对象
    const obj = {};

    //代理选项
    const handler = {
        get: function(target, key) {
            return Reflect.get(target, key)
        },
        set: function(target, key, value) {
            if(key === 'text') {
                inputObj.value = inputObj.value === value ? inputObj.value : value
                txtObj.innerHTML = value
            }
            return Reflect.set(target, key, value)
        }
    }

    let objProxy = new Proxy(obj, handler)

    //给input添加键盘事件
    inputObj.addEventListener('keyup', function(e) {
        objProxy.text = e.target.value
    })

    objProxy.text = '123333'
}