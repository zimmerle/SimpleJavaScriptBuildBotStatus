SimpleJavaScriptBuildBotStatus
==============================

Simple and dirty Javascript that can be used to populate an html
entity (such as div) with fresh information directly from a
Buildbot JSON api.

This may be handfull to someone else. 


Before try
==========

Make sure that jQuery is loaded and working well.


Usage
=====

Include the buildbot-status script on your site:

<script src="buildbot-status.js"></script>

And then call getBuildBotStatus function with the URL to your buildbot
page followed by the div that you want to populate, as demonstrated bellow:

$( document ).ready(function() {
    getBuildBotStatus("http://www.modsecurity.org/developers/buildbot/",
        $('#fancyStatusBoard'));
});


