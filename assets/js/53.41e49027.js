(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{659:function(t,a,n){"use strict";n.r(a);var s=n(36),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"anaconda-mirror"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#anaconda-mirror"}},[t._v("#")]),t._v(" "),n("a",{attrs:{href:"/anaconda"}},[t._v("Anaconda")]),t._v(" Mirror")]),t._v(" "),n("h2",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Anaconda_(Python_distribution)",target:"_blank",rel:"noopener noreferrer"}},[t._v("Anaconda"),n("OutboundLink")],1),t._v(" is a free and open-source distribution of the Python and R programming languages for scientific computing (data science, machine learning applications, large-scale data processing, predictive analytics, etc.), that aims to simplify package management and deployment.")])]),t._v(" "),n("h2",{attrs:{id:"configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),n("p",[t._v("You can run the following commands in your terminal:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("conda config --add channels https://mirrors.sustech.edu.cn/anaconda/pkgs/free/\nconda config --add channels https://mirrors.sustech.edu.cn/anaconda/pkgs/main/\nconda config --set show_channel_urls "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("\n")])])]),n("p",[t._v("Then a configuration file named "),n("code",[t._v(".condarc")]),t._v(" will be created. And you can manually create the configuration file and edit it with your text editor:")]),t._v(" "),n("div",{staticClass:"language-toml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-toml"}},[n("code",[t._v("channels:\n  - defaults\nshow_channel_urls: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\ndefault_channels:\n  - https://mirrors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/anaconda/pkgs/main\n  - https://mirrors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/anaconda/pkgs/free\n  - https://mirrors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/anaconda/pkgs/r\n  - https://mirrors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/anaconda/pkgs/pro\n  - https://mirrors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/anaconda/pkgs/msys2\ncustom_channels:\n  conda-forge: https://mirrors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/anaconda/cloud\n  msys2: https://mirrors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/anaconda/cloud\n  bioconda: https://mirrors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/anaconda/cloud\n  menpo: https://mirrors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/anaconda/cloud\n  pytorch: https://mirrors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/anaconda/cloud\n  simpleitk: https://mirrors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sustech"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn/anaconda/cloud\n")])])]),n("p",[t._v("Path of the per-user configuration file:")]),t._v(" "),n("ul",[n("li",[t._v("Linux: "),n("code",[t._v("$HOME/.condarc")])]),t._v(" "),n("li",[t._v("macOS: "),n("code",[t._v("$HOME/.condarc")])]),t._v(" "),n("li",[t._v("Windows: "),n("code",[t._v("C:\\Users\\<YourUserName>\\.condarc")])])]),t._v(" "),n("h2",{attrs:{id:"using-anaconda-at-sustech-hpc-cluster"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-anaconda-at-sustech-hpc-cluster"}},[t._v("#")]),t._v(" Using Anaconda at SUSTech HPC Cluster")]),t._v(" "),n("p",[t._v("Please refer to this "),n("a",{attrs:{href:"https://hpc.sustech.edu.cn/ref/anaconda-install-by-user.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),n("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=e.exports}}]);