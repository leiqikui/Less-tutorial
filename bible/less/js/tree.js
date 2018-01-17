
function createTree(id) {
	tree = new dTree("content");

	tree.add(1, -1, "1 Less 基础", "http://localhost/waibo/bible/less/html/1/1.html");
	tree.add(101, 1, "1.1 认识 Less", "http://localhost/waibo/bible/less/html/1/1.1.html");
	tree.add(102, 1, "1.2 Less 原理", "http://localhost/waibo/bible/less/html/1/1.2.html");
	tree.add(103, 1, "1.3 Less 用法", "http://localhost/waibo/bible/less/html/1/1.3.1.html");
	tree.add(10301, 103, "1.3.1 浏览器端使用", "http://localhost/waibo/bible/less/html/1/1.3.1.html");
	tree.add(10302, 103, "1.3.2 服务器端使用", "http://localhost/waibo/bible/less/html/1/1.3.2.html");
	tree.add(104, 1, "1.4 Less 编译工具", "http://localhost/waibo/bible/less/html/1/1.4.1.html");
	tree.add(10401, 104, "1.4.1 选择Koala的理由", "http://localhost/waibo/bible/less/html/1/1.4.1.html");
	tree.add(10402, 104, "1.4.2 如何使用Koala", "http://localhost/waibo/bible/less/html/1/1.4.2.html");
	tree.add(10403, 104, "1.4.3 Koala界面介绍", "http://localhost/waibo/bible/less/html/1/1.4.3.html");
	tree.add(2, -1, "2 Less 特性", "http://localhost/waibo/bible/less/html/2/2.html");
	tree.add(201, 2, "2.1 变量", "http://localhost/waibo/bible/less/html/2/2.1.1.html");
	tree.add(20101, 201, "2.1.1 普通变量", "http://localhost/waibo/bible/less/html/2/2.1.1.html");
	tree.add(20102, 201, "2.1.2 变量插值", "http://localhost/waibo/bible/less/html/2/2.1.2.html");
	tree.add(20103, 201, "2.1.3 变量的作用域", "http://localhost/waibo/bible/less/html/2/2.1.3.html");
	tree.add(202, 2, "2.2 Mixin", "http://localhost/waibo/bible/less/html/2/2.2.1.html");
	tree.add(20201, 202, "2.2.1 什么是Mixin", "http://localhost/waibo/bible/less/html/2/2.2.1.html");
	tree.add(20202, 202, "2.2.2 带参数的mixin", "http://localhost/waibo/bible/less/html/2/2.2.2.html");
	tree.add(20203, 202, "2.2.3 作为函数的mixin", "http://localhost/waibo/bible/less/html/2/2.2.3.html");
	tree.add(203, 2, "2.3 嵌套规则", "http://localhost/waibo/bible/less/html/2/2.3.html");
	tree.add(204, 2, "2.4 运算和函数", "http://localhost/waibo/bible/less/html/2/2.4.1.html");
	tree.add(20401, 204, "2.4.1 运算", "http://localhost/waibo/bible/less/html/2/2.4.1.html");
	tree.add(20402, 204, "2.4.2 函数", "http://localhost/waibo/bible/less/html/2/2.4.2.html");
	tree.add(205, 2, "2.5 转义字符", "http://localhost/waibo/bible/less/html/2/2.5.html");
	tree.add(206, 2, "2.6 注释", "http://localhost/waibo/bible/less/html/2/2.6.html");
	tree.add(207, 2, "2.7 命名空间", "http://localhost/waibo/bible/less/html/2/2.7.html");
	tree.add(208, 2, "2.8 @import指令", "http://localhost/waibo/bible/less/html/2/2.8.html");
	tree.add(209, 2, "2.9 !important关键字", "http://localhost/waibo/bible/less/html/2/2.9.html");
	tree.add(210, 2, "2.10 模式匹配", "http://localhost/waibo/bible/less/html/2/2.10.html");
	tree.add(211, 2, "2.11 条件表达式", "http://localhost/waibo/bible/less/html/2/2.11.html");
	tree.add(212, 2, "2.12 循环", "http://localhost/waibo/bible/less/html/2/2.12.html");
	tree.add(213, 2, "2.13 合并", "http://localhost/waibo/bible/less/html/2/2.13.html");
	tree.add(214, 2, "2.14 Extend", "http://localhost/waibo/bible/less/html/2/2.14.html");
	tree.add(3, -1, "3 Less函数", "http://localhost/waibo/bible/less/html/3/3.html");
	tree.add(4, -1, "4 参考资料", "http://localhost/waibo/bible/less/html/4/4.html");

	document.write(tree);
	tree.openTo(id, true);
}