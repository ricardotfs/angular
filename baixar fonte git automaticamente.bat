ECHO ON
E:
CD\
CD GIT
CD QA

IF EXIST "gvp-idea-web" (GOTO CHECKOUT) ELSE (GOTO GVP-IDEA-WEB-TEMP)

:GVP-IDEA-WEB-TEMP
IF EXIST "gvp-idea-web-temp" (GOTO RENAME) ELSE (GOTO GIT)

:GIT
git clone https://login/repositorio/fonte pasta-temp
GOTO RENAME

:RENAME
rename  gvp-idea-web-temp  gvp-idea-web
GOTO CHECKOUT

:CHECKOUT
CD gvp-idea-web
git checkout 6.19.1.2
git pull
e:\git\QA\nuget.exe restore IDEA.Web.sln
RD /S /Q "e:\git\QA\gvp-idea-web_publish\"
C:
CD "C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools\MSBuild\15.0\Bin\"
msbuild "e:\git\QA\gvp-idea-web\IDEA.Web.sln" /t:Rebuild /p:outdir=e:\git\QA\gvp-idea-web_publish\ /p:Configuration=Release
E:
CD\git\QA\gvp-idea-web_publish\_PublishedWebsites\Gvp.IDEA.Web
DEL web.config

XCOPY "e:\git\QA\gvp-idea-web_publish\_PublishedWebsites\Gvp.IDEA.Web\*"  "E:\WEB\QA\APP\homologacao.ideasocialcrm.com.br" /S /Y /H 
XCOPY "e:\git\QA\gvp-idea-web_publish\App_GlobalResources\*"  "E:\WEB\QA\APP\homologacao.ideasocialcrm.com.br\App_GlobalResources" /S /Y /H 

CD\git\QA\gvp-idea-web_publish\_PublishedWebsites\Gvp.IDEA.WebAPI
DEL web.config

XCOPY "e:\git\QA\gvp-idea-web_publish\_PublishedWebsites\Gvp.IDEA.WebAPI\*"  "E:\WEB\QA\API\api.ideacrm.com.br" /S /Y /H 
