(function () {
    // 一些封装
    function $ (ele) {
        if (document.querySelectorAll(ele).length === 1) {
            return document.querySelector(ele);
        } else {
            return document.querySelectorAll(ele);
        }
    }

    function hasClassName (ele, name) {
        return ele.className.indexOf(name) !== -1;
    }

    function addClassName (ele, name) {
        if (!hasClassName(ele, name)) {
            ele.className += ' ' + name;
        }
    }

    var addEvent = (function () {
        if ('addEventListener' in document) {
            return function (ele, event, handle) {
                ele.addEventListener(event, handle);
            }
        } else if ('attachEvent' in document) {
            return function (ele, event, handle) {
                ele.attachEvent('on' + event, handle);
            }
        } else {
            return function (ele, event, handle) {
                ele['on' + event] = handle;
            } 
        }
    })();


    var btn = $('.header-btn');

    // 点击按钮
    addEvent(btn, 'click', function (e) {
        if (e.target.tagName.toUpperCase() === 'BUTTON') {
            var btns = $('.btn-item');
            var btnId = e.target.id;
            for (var i = 0; i < btns.length; i++) {
                btns[i].className = 'btn-item';
            }

            console.log(btnId);
            changeBar(btnId);
            changePage(btnId);
            addClassName(e.target, 'active');
        }
    })

    // 改变按钮下标
    function changeBar (n) {
        var n = parseInt(n);
        var bar = $('.btn-bar');
        bar.style.left = ((n - 1) * 98 + (28 + n * 1.3)) / 75 + 'rem';
    }

    // 切换页面
    function changePage (n) {
        var n = parseInt(n - 1);
        var checkoutWrap = $('.checkout-wrap');
        checkoutWrap.style.left = (- n * 750 / 75) + 'rem';
    }

    // 改变页面背景色
    function changeBGC (classN) {
        var nodeArr = $('.' + classN);
        if (!nodeArr.length) {
            nodeArr.style.backgroundColor = '#f4faff';
        } else {
            for (var i = 0; i < nodeArr.length; i++) {
                if ((i + 2) % 2 === 0) {
                    nodeArr[i].style.backgroundColor = '#f4faff';
                }
            }
        }
    }

    changeBGC('score-item');
    changeBGC('bk-item');

    // 报错 status为是否错误 errClass为显示错误信息的class
    function errorControl (status, errClass) {
        var info = $('.checkout-wrap');
        var error = $('.' + errClass);
        if (!status) {
            info.style.display = 'none';
            error.style.display = 'block';
        } else {
            info.style.display = 'block';
            error.style.display = 'none';
        }
    }

    // errorControl(0, 'unerror');
    // errorControl(0, 'bk-error');
})()