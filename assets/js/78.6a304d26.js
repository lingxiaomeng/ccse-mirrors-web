(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{684:function(t,s,a){"use strict";a.r(s);var r=a(36),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ubuntu-mirror"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-mirror"}},[t._v("#")]),t._v(" "),a("RouterLink",{attrs:{to:"/ubuntu/"}},[t._v("Ubuntu")]),t._v(" Mirror")],1),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://ubuntu.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu"),a("OutboundLink")],1),t._v(" is a popular and user-friendly Linux distribution based on Debian.")]),t._v(" "),a("h2",{attrs:{id:"backup-existing-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup-existing-configuration"}},[t._v("#")]),t._v(" Backup Existing Configuration")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -a /etc/apt/sources.list /etc/apt/sources.list.bak\n")])])]),a("h2",{attrs:{id:"edit-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#edit-configuration"}},[t._v("#")]),t._v(" Edit Configuration")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s@http://.*archive.ubuntu.com@https://mirrors.sustech.edu.cn@g"')]),t._v(" /etc/apt/sources.list\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s@http://.*security.ubuntu.com@https://mirrors.sustech.edu.cn@g"')]),t._v(" /etc/apt/sources.list \n")])])]),a("h2",{attrs:{id:"refresh-repository-indexes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refresh-repository-indexes"}},[t._v("#")]),t._v(" Refresh Repository Indexes")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);