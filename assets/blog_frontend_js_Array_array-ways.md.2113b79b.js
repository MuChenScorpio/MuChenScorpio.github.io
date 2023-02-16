import{_ as s,c as n,o as a,d as l}from"./app.f06f7e70.js";const h=JSON.parse('{"title":"数组、对象、字符串常见方法","description":"","frontmatter":{},"headers":[{"level":3,"title":"数组","slug":"数组","link":"#数组","children":[]},{"level":3,"title":"对象","slug":"对象","link":"#对象","children":[]},{"level":2,"title":"字符串","slug":"字符串","link":"#字符串","children":[]}],"relativePath":"blog/frontend/js/Array/array-ways.md"}'),e={name:"blog/frontend/js/Array/array-ways.md"},p=l(`<h1 id="数组、对象、字符串常见方法" tabindex="-1">数组、对象、字符串常见方法 <a class="header-anchor" href="#数组、对象、字符串常见方法" aria-hidden="true">#</a></h1><p>数组，对象，字符串在实现业务逻辑时常常遇到增加，替换 ，删除，截取的要求，为了方便工作中提高工作效率和防止忘记，写了数组，对象，字符串中常用的方法和针对性应用场景。</p><h3 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-hidden="true">#</a></h3><p>删除数组的某一项或某几项: <code>array.splice(i,1)</code></p><blockquote><p>场景：返回的数据中如果返回的是空对象或者空字符串 删除该对象或者删除该字符串</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">//第一种：数组包对象</span></span>
<span class="line"><span style="color:#A6ACCD;">let arr = [{id:1,name:&#39;amy&#39;},{},{},{},{}];</span></span>
<span class="line"><span style="color:#A6ACCD;">//第二种：数组包空字符串</span></span>
<span class="line"><span style="color:#A6ACCD;">let newArr = [&#39;amy&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;];</span></span>
<span class="line"><span style="color:#A6ACCD;">//封装无论是空对象还是空字符串</span></span>
<span class="line"><span style="color:#A6ACCD;">function DelEmptyObj(temp){</span></span>
<span class="line"><span style="color:#A6ACCD;">  temp.forEach((item,index)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">    //知识点 下面对象中有讲解 判断是否是空对象obj</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(JSON.stringify(item) == &#39;{}&#39; || item == &#39;&#39;){</span></span>
<span class="line"><span style="color:#A6ACCD;">      item.splice(index,1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">  retuen temp;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">//调用函数</span></span>
<span class="line"><span style="color:#A6ACCD;">DelEmptyObj(arr); // [{id:1,name:&#39;amy&#39;}]</span></span>
<span class="line"><span style="color:#A6ACCD;">DelEmptyObj(newArr); // [&#39;amy&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="对象" tabindex="-1">对象 <a class="header-anchor" href="#对象" aria-hidden="true">#</a></h3><p><strong>判断是否是空对象</strong></p><blockquote><ul><li>判断json字符串是不是&#39;{}&#39;</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let obj = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">function verify(obj){</span></span>
<span class="line"><span style="color:#A6ACCD;">if(JSON.stringify(obj) == &#39;{}&#39;){</span></span>
<span class="line"><span style="color:#A6ACCD;">return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">verify(obj);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><p>es6新增方法 Object.keys(obj).length 或者</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Object.value(obj).length</span></span>
<span class="line"><span style="color:#A6ACCD;">let obj = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">function change1(arg1){</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Object.keys(arg1)); // []</span></span>
<span class="line"><span style="color:#A6ACCD;">if(Object.keys(arg1).length != 0){</span></span>
<span class="line"><span style="color:#A6ACCD;">   return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function change2(arg2){</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Object.values(arg2)); // []</span></span>
<span class="line"><span style="color:#A6ACCD;">if(Object.values(arg2).length != 0){</span></span>
<span class="line"><span style="color:#A6ACCD;">   return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">change1(obj1);</span></span>
<span class="line"><span style="color:#A6ACCD;">change2(obj2);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul></blockquote><p><strong>2.判断对象中是否存在某属性</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">方法一：通过把对象通过keys()转化为数组.indexOf(str)</span></span>
<span class="line"><span style="color:#A6ACCD;">let obj = {name:&#39;amy&#39;,age:18};</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(Object.keys(obj).indexOf(&#39;amy&#39;));  //true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">方法二：in </span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&#39;amy&#39; in obj)  //true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">方法三:hasOwnProperty</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj.hasOwnProperty(&#39;amy&#39;))  //true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="字符串" tabindex="-1">字符串 <a class="header-anchor" href="#字符串" aria-hidden="true">#</a></h2>`,14),o=[p];function t(c,i,r,C,A,y){return a(),n("div",null,o)}const D=s(e,[["render",t]]);export{h as __pageData,D as default};
