// ==UserScript==
// @name         Overnullch Links
// @namespace    http://0chan.cf
// @version      0.1
// @description  Synchronises links on 0chan.cf
// @author       Juribiyan
// @match        *://*/*
// @grant        none
// ==/UserScript==

if(window.self !== window.top && typeof parent.frames['list'] !== 'undefined' && document.location.pathname !== '/frame.html' && document.location.pathname !== '/index.html') {
	parent.frames['list'].window.postMessage(document.location.href, "http://0chan.cf");
}