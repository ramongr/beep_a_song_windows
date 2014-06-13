var WindowStyle_Hidden = 0
var objShell = WScript.CreateObject("WScript.Shell")
var result = objShell.Run("cmd.exe /c beep.exe", WindowStyle_Hidden)
var result2 = objShell.Run("firefox.exe")