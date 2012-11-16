$.backstretch(GetSiteRoot() + "images/home_background.gif");
$.backstretch(GetSiteRoot() + "images/map_background.png");
$.backstretch(GetSiteRoot() + "images/imported/page1.jpg");
$.backstretch(GetSiteRoot() + "images/home_background.gif");

function GetSiteRoot()
{
    var rootPath = window.location.protocol + "//" + window.location.host + "/";
    if (window.location.hostname == "localhost")
    {
        var path = window.location.pathname;
        if (path.indexOf("/") == 0)
        {
            path = path.substring(1);
        }
        path = path.split("/", 1);
        if (path != "")
        {
            rootPath = rootPath + path + "/";
        }
    }
    return rootPath;
}