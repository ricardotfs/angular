ECHO OFF
E:
CD\
CD GIT

IF EXIST "gvp-idea-web" (GOTO CHECKOUT) ELSE (GOTO GVP-IDEA-WEB-TEMP)

:GVP-IDEA-WEB-TEMP
IF EXIST "gvp-idea-web-temp" (GOTO RENAME) ELSE (GOTO GIT)

:GIT
git clone https://robsonescribano:84b40e9dde86e733866b76173ded2e9943067500@github.com/gvpitsolutions/gvp-idea-web gvp-idea-web-temp
GOTO RENAME

:RENAME
rename  gvp-idea-web-temp  gvp-idea-web
GOTO CHECKOUT

:CHECKOUT
CD gvp-idea-web
git checkout 6.18.2.1
git pull
E:\git\nuget.exe restore IDEA.Web.sln
RD /S /Q "E:\git\gvp-idea-web_publish\"
C:
CD "C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools\MSBuild\15.0\Bin\"
msbuild "E:\git\gvp-idea-web\IDEA.Web.sln" /t:Rebuild /p:outdir=E:\git\gvp-idea-web_publish\ /p:Configuration=Release
E:
CD\git\gvp-idea-web_publish\_PublishedWebsites\Gvp.IDEA.Web
DEL web.config

XCOPY "E:\git\gvp-idea-web_publish\_PublishedWebsites\Gvp.IDEA.Web\*"  "E:\WEB\Homologacao\APP\homologacao.ideasocialcrm.com.br" /S /Y /H 
XCOPY "E:\git\gvp-idea-web_publish\App_GlobalResources\*"  "E:\WEB\Homologacao\APP\homologacao.ideasocialcrm.com.br\App_GlobalResources" /S /Y /H 

CD\git\gvp-idea-web_publish\_PublishedWebsites\Gvp.IDEA.WebAPI
DEL web.config

XCOPY "E:\git\gvp-idea-web_publish\_PublishedWebsites\Gvp.IDEA.WebAPI\*"  "E:\WEB\Homologacao\API\api.ideacrm.com.br" /S /Y /H 