// ====================================================================
// GreyScript Snippets Smoke Test
// Purpose: verify snippet insertion & formatting for all categories.
// Save this file as test_snippets.src (or .gs) and open in VS Code.
// Tip: Use IntelliSense to insert snippets & check descriptions.
// Some calls may require specific runtime types and are illustrative.
// ====================================================================

// ---------- DEFINITIONS: LIST ----------

list.crop = function()
        while not self[self.len - 1].len > 0
            self.remove(self.len - 1)
        end while
        while not self[0].len > 0
            self.remove(0)
        end while
        return self
    end function

list.push_once = function(listItem)
	if not self.hasIndex(self.indexOf(locals.listItem)) then
		self.push(locals.listItem)
	end if	
end function

list.string = function(seperator = char(10))
    locals.printString = split(self, locals.seperator)
    return locals.printString
end function


// ---------- DEFINITIONS: MAP ----------

map.get_attributes = function()
	locals.attributeList = []
	for param in self["__isa"]
		locals.attributeList.push(locals.param.key)
	end for	
	return locals.attributeList
end function

map.push_once = function(mapItem)
	if not self.hasIndex(self.indexOf(mapItem)) then
		self.push(targetIP)
	end if	
end function

map.get_port_info = function(portNumber)
// Coerce string digits to integer, else error
    if typeof(locals.portNumber) == "string" then
        if locals.portNumber.matches("^[0-9]+$").len > 0 then
            locals.portNumber = val(locals.portNumber)
        else
            return "<#FF0000>Type Mismatch, portNumber must be an integer"
        end if
    end if
    if locals.portNumber == null or typeof(locals.portNumber) != "number" then
        return "<#FF0000>Type Mismatch, portNumber must be a number"
    end if
    if not typeof(self) == "router" then return "<#FF0000>Type Mismatch, object is not a router"
    locals.portObject = self.ping_port(locals.portNumber)
    if not typeof(locals.portObject) == "port" then return "<#FF0000>Type Mismatch, object is not a port"
    return self.port_info(locals.portObject)
end function


// ---------- DEFINITIONS: ENUM ----------

enum.string_construct__ = function()
	locals.fail = new {"classID": "errorStrings"}
	locals.pass = new {"classID": "passStrings"}
	locals.action = new {"classID": "actionStrings"}
	locals.info = new {"classID": "infoStrings"}
	locals.email = new {"classID": "emailString"}
	locals.status = {"classID": "gstexts", "fail": locals.fail, "pass": locals.pass, "action": locals.action, "info": locals.info, "email": locals.email}
	locals.status.fail.network_devices_found = "No network devices found"
	locals.status.pass.network_devices_found = "Network device(s) found  "
	locals.status.fail.lib_found = "Library not found"
	locals.status.pass.lib_found = "Library found"
	locals.status.fail.file_found = "File not found"
	locals.status.pass.file_found = "File found"
	locals.status.fail.dir_found = "Directory not found"
	locals.status.pass.dir_found = "Directory found"
	locals.status.fail.user_found = "User not found"
	locals.status.pass.user_found = "User found"
	locals.status.fail.default = "FAIL"
	locals.status.pass.default = "PASS"
	locals.status.fail.check_user_email = "eMail not found"
	locals.status.pass.check_user_email = "eMail Found"	
	locals.status.fail.check_user_bank = "bank account not found"
	locals.status.pass.check_user_bank = "bank account Found"
	locals.status.info.active_card_wifi = "Connected to WIFI"
	locals.status.info.active_card_ethernet = "Connected to Ethernet"				
	locals.status.action.check_network_devices = "Checking Network Devices..."
	locals.status.action.check_user_email = "Checking for email account..."
	locals.status.action.check_user_bank = "Checking for bank account..."
	locals.status.action.check_active_net_card = "Checking for active net card..."
	locals.status.email.mission_contract = "Mission Contract"
	locals.status.fail.has_internet = "No Internet Connection"
	locals.status.pass.has_internet = "Internet Connection Found"
	locals.status.action.has_internet = "Checking Internet Connection..."
	locals.status.info.mission_contract = "Mission Contract"
	locals.status.fail.has_lib_dir = "lib directory not found"
	locals.status.pass.has_lib_dir = "lib directory Found"
	locals.status.action.has_lib_dir = "Checking for lib directory..."
	locals.status.fail.has_metaxploit = "metaxploit not found"
	locals.status.pass.has_metaxploit = "metaxploit found"
	locals.status.action.has_metaxploit = "Checking for metaxploit.so..."	
	return locals.status
end function


// ---------- DEFINITIONS: CONSTRUCT ----------

construct.string_construct__ = function()
	locals.fail = new {"classID": "errorStrings"}
	locals.pass = new {"classID": "passStrings"}
	locals.action = new {"classID": "actionStrings"}
	locals.info = new {"classID": "infoStrings"}
	locals.email = new {"classID": "emailString"}
	locals.status = {"classID": "gstexts", "fail": locals.fail, "pass": locals.pass, "action": locals.action, "info": locals.info, "email": locals.email}
	locals.status.fail.network_devices_found = "No network devices found"
	locals.status.pass.network_devices_found = "Network device(s) found  "
	locals.status.fail.lib_found = "Library not found"
	locals.status.pass.lib_found = "Library found"
	locals.status.fail.file_found = "File not found"
	locals.status.pass.file_found = "File found"
	locals.status.fail.dir_found = "Directory not found"
	locals.status.pass.dir_found = "Directory found"
	locals.status.fail.user_found = "User not found"
	locals.status.pass.user_found = "User found"
	locals.status.fail.default = "FAIL"
	locals.status.pass.default = "PASS"
	locals.status.fail.check_user_email = "eMail not found"
	locals.status.pass.check_user_email = "eMail Found"	
	locals.status.fail.check_user_bank = "bank account not found"
	locals.status.pass.check_user_bank = "bank account Found"
	locals.status.info.active_card_wifi = "Connected to WIFI"
	locals.status.info.active_card_ethernet = "Connected to Ethernet"				
	locals.status.action.check_network_devices = "Checking Network Devices..."
	locals.status.action.check_user_email = "Checking for email account..."
	locals.status.action.check_user_bank = "Checking for bank account..."
	locals.status.action.check_active_net_card = "Checking for active net card..."
	locals.status.email.mission_contract = "Mission Contract"
	locals.status.fail.has_internet = "No Internet Connection"
	locals.status.pass.has_internet = "Internet Connection Found"
	locals.status.action.has_internet = "Checking Internet Connection..."
	locals.status.info.mission_contract = "Mission Contract"
	locals.status.fail.has_lib_dir = "lib directory not found"
	locals.status.pass.has_lib_dir = "lib directory Found"
	locals.status.action.has_lib_dir = "Checking for lib directory..."
	locals.status.fail.has_metaxploit = "metaxploit not found"
	locals.status.pass.has_metaxploit = "metaxploit found"
	locals.status.action.has_metaxploit = "Checking for metaxploit.so..."	
	return locals.status
end function

construct.fetch_whois = function(routerPublicIPAddress)
	if not is_lan_ip(locals.routerPublicIPAddress) == true then
		if is_valid_ip(routerPublicIPAddress) then
			locals.whoisInfo = {"classID":"whoisInfo", "admin":"", "domain":"", "email":"", "network":"", "phone":"", "error":null}
			locals.what = split(whois(locals.routerPublicIPAddress), "\n")
			locals.whoisInfo.domain = str(split(locals.what[0], ":")[1]).trim
			locals.whoisInfo.admin = str(split(locals.what[1], ":")[1]).trim
			locals.whoisInfo.email = str(split(locals.what[2], ":")[1]).trim
			locals.whoisInfo.phone = str(split(locals.what[3], ":")[1]).trim
			if locals.what.len >= 5 then
				locals.whoisInfo.network = str(split(locals.what[4], ":")[0]).trim
			else
				locals.whoisInfo.network = "[ UNKNOWN ]"
			end if
		else 
			locals.whoisInfo = {"classID":"whoisInfo", "error":"Invalid Public IP Address Provided."}	
		end if
	else
		locals.whoisInfo = {"classID":"whoisInfo", "error":"Needs Public IP, Provided Local IP."}
	end if
	locals.whoisInfo.error = false
	return locals.whoisInfo
end function

construct.file_location_ident = function(absoluteLocation)
        locals.ext = slice(locals.absoluteLocation, (locals.absoluteLocation.lastIndexOf(".") + 1), locals.absoluteLocation.len)
        locals.name = slice(locals.absoluteLocation, locals.absoluteLocation.lastIndexOf("/") + 1, locals.absoluteLocation.lastIndexOf("."))
		locals.filename = locals.name + "." + locals.ext
        locals.dir = slice(locals.absoluteLocation, locals.absoluteLocation.indexOf("/"), locals.absoluteLocation.lastIndexOf("/"))
        locals.folder = slice(locals.dir, locals.dir.lastIndexOf("/") + 1)
        locals.location = locals.dir + "/" + locals.name + "." + locals.ext
        locals.construct = {"classID":"fileID", "ext": locals.ext, "name": locals.name, "parentdir": locals.folder, "dir": locals.dir, "location": locals.location, "filename": locals.filename}
        return locals.construct
end function

construct.id_self = function()
	locals.localRouter = get_router
        if not typeof(locals.localRouter) == "router" then return "Failed to fetch local router object."
	locals.localComputer = get_shell.host_computer
        if not typeof(locals.localComputer) == "computer" then return "Failed to fetch local computer object."
	locals.ipInformation = {"classID": "ipInformation", "local": locals.localComputer.local_ip, "public": locals.localComputer.public_ip, "gateway":locals.localComputer.network_gateway}
	locals.ipScan = locals.ipInformation
	locals.ComputerInformation = {"classID": "computerInformation","name":locals.localComputer.get_name, "home":home_dir, "location":program_path, "path":current_path, "user":active_user, "has_internet":locals.localComputer.is_network_active}
	locals.computerInfo = locals.ComputerInformation
	locals.currentStatus = {"classID":"currentStatus", "ipInfo":locals.ipScan, "compInfo":locals.computerInfo}
	locals.currentStatus.classID = "currentStatus"
	return locals.currentStatus
end function

construct.fetch_exploit_requirements = function(targetAddress, metaLibObject, metaxploitObject)
    locals.metax = locals.metaxploitObject
    locals.metaLib = locals.metaLibObject
    locals.allExploitData = []
    locals.scanResults = locals.metax.scan_address(locals.metaLib, targetAddress)
    locals.unsafeCheckLists = (unsafe_check_list(locals.scanResults)).crop
    for unsafeCheck in locals.unsafeCheckLists
            locals.exploits = {"classID": "exploitRequirments", "version":version, "address": targetAddress, "variable": locals.unsafeCheck.extract, "cra": false, "cga": false, "cua": false, "rur": 0, "rpf": 0}
            if not locals.unsafeCheck.indexOf("Checking root active") then
                locals.exploits.cra = false
            else
                locals.exploits.cra = true
            end if
            if not locals.unsafeCheck.indexOf("Checking an active user") then
                locals.exploits.cua = false
            else
                locals.exploits.cua = true
            end if
            if not locals.unsafeCheck.indexOf("Checking guest active") then
                locals.exploits.cga = false
            else
                locals.exploits.cga = true
            end if
                locals.unsafeCheckItems = split(locals.unsafeCheck, char(10))
                locals.unsafeCheckHeader = locals.unsafeCheckItems[0]
                for unsafeItem in locals.unsafeCheckItems
                    if not locals.unsafeItem.indexOf("to ", ".") == null then
                        if not locals.unsafeItem.indexOf("registered users") == null then
                            locals.exploits.rur = to_int((locals.unsafeItem.extract("to ", ".")).remove_char_last)
                        end if  
                        if not locals.unsafeItem.indexOf("port forwarding") == null then
                            locals.portForwards = locals.unsafeItem.remove(" port forwarding configured from router to the target computer.")
                            locals.exploits.rpf = to_int(((locals.unsafeItem.remove(" port forwarding configured from router to the target computer.")).remove("* ")))
                        end if						
                    end if
                end for
            locals.exploits.version = locals.metaLib.version
            locals.allExploitData.push(locals.exploits)
        end for
    return locals.allExploitData
end function


// ---------- DEFINITIONS: NUMBER ----------

    number.is_less = function(is_less)
            if locals.is_less < self then return true
            return false
    end function

    number.is_more = function(is_more)
            if locals.is_more > self then return true
            return false
    end function

number.is_negative = function()
    if self < 0 then return true
    return false
end function

number.is_positive = function()
    if self >= 0 then return true
    return false
end function

number.is_zero = function()
    if self == 0 then return true
    return false
end function

number.clamp = function(min, max)
            if self < locals.min then return locals.min
            if self > locals.max then return locals.max
            return self
end function

    number.diff = function(distanceTo = 0)
            return abs(self - locals.distanceTo)
    end function

number.div = function(amount = 2)
    if typeof(locals.amount) == "number" then
        if locals.amount == 0 then return 0
    end if
        return self / locals.amount
end function

number.is_float = function()
	if str(self).indexOf(".") > 0 then return true
    return false
end function

number.is_integer = function()
	if not self == round(self) then return false
    return true
end function

    number.minus = function(amount = 1)
            return self - locals.amount
    end function

    number.multiply = function(amount = 2)
            return self * locals.amount
    end function

number.plus = function(amount = 1)
        return self + locals.amount
end function

    number.random_from = function(min = 0)
            locals.max = self
            return floor((rnd * (locals.max - locals.min + 1)) + locals.min)  
    end function

    number.lerp = function(min, max, offset)
        if locals.offset > 1 then locals.offset = 1
        if locals.offset < 0 then locals.offset = 0
        locals.difference = locals.max - locals.min
        locals.scaled_difference = locals.offset * locals.difference
        return locals.min + locals.scaled_difference
    end function


// ====================================================================
// CALLS / USAGE EXAMPLES
// For each category, we set up a sample variable and call the methods.
// Adjust placeholders/types if you want to execute this script.
// ====================================================================

// ---------- CALLS: STRING ----------
txt = "Hello <b>World</b> 192.168.1.1"

// string.align
print(txt.align("center", true))

// string.alpha
print(txt.alpha("#FF"))

// string.bold
print(txt.bold())

// string.color
print(txt.color(colorValue))

// string.cspace
print(txt.cspace("1em", true))

// string.extract
print(txt.extract("<b>", "</b>"))

// string.format
print(txt.format(["name","place"], "%s"))

// string.indent
print(txt.indent("15%", true))

// string.italic
print(txt.italic())

// string.line_indent
print(txt.line_indent("15%", true))

// string.lowercase
print(txt.lowercase())

// string.margin
print(txt.margin("5em"))

// string.mark
print(txt.mark("#FFFF00BF"))

// string.mask
print(txt.mask(true, char(42), null))

// string.mspace
print(txt.mspace("2.75em"))

// string.nobr
print(txt.nobr())

// string.noparse
print(txt.noparse())

// string.page
print(txt.page())

// string.pos
print(txt.pos("50%"))

// string.remove_bold
print(txt.remove_bold())

// string.remove_char_first
print(txt.remove_char_first())

// string.remove_char_last
print(txt.remove_char_last())

// string.remove_italic
print(txt.remove_italic())

// string.remove_mark
print(txt.remove_mark())

// string.remove_strike
print(txt.remove_strike())

// string.remove_sub
print(txt.remove_sub())

// string.remove_sup
print(txt.remove_sup())

// string.remove_underline
print(txt.remove_underline())

// string.rotate
print(txt.rotate("45"))

// string.size
print(txt.size("5em"))

// string.strike
print(txt.strike())

// string.sub
print(txt.sub())

// string.sup
print(txt.sup())

// string.underline
print(txt.underline())

// string.uppercase
print(txt.uppercase())

// string.voffset
print(txt.voffset("1em"))

// string.width
print(txt.width("50%"))


// ---------- CALLS: LIST ----------
lst = ["a", "b", "a", "", "c"]

// list.crop
print(lst.crop())

// list.push_once
print(lst.push_once(listItem))

// list.string
print(lst.string(char(10)))


// ---------- CALLS: MAP ----------
// NOTE: Some map.* helpers expect special types (router/port).
mp = {}  // placeholder; adjust to a real router/map object if you plan to run

// map.get_attributes
print(mp.get_attributes())

// map.get_port_info
print(mp.get_port_info(0))

// map.push_once
print(mp.push_once(mapItem))


// ---------- CALLS: ENUM ----------
enm = {}  // placeholder

// enum.string_construct__
print(enm.string_construct__())


// ---------- CALLS: CONSTRUCT ----------
obj = {}  // placeholder

// construct.fetch_exploit_requirements
print(obj.fetch_exploit_requirements(targetAddress, metaLibObject, metaxploitObject))

// construct.fetch_whois
print(obj.fetch_whois(routerPublicIPAddress))

// construct.file_location_ident
print(obj.file_location_ident(absoluteLocation))

// construct.id_self
print(obj.id_self())

// construct.string_construct__
print(obj.string_construct__())


// ---------- CALLS: NUMBER ----------
num = 42
other = 7

// number.clamp
print(num.clamp(min, max))

// number.diff
print(num.diff(0))

// number.div
print(num.div(2))

// number.is_float
print(num.is_float())

// number.is_integer
print(num.is_integer())

// number.is_less
print(num.is_less(is_less))

// number.is_more
print(num.is_more(is_more))

// number.is_negative
print(num.is_negative())

// number.is_positive
print(num.is_positive())

// number.is_zero
print(num.is_zero())

// number.lerp
print(num.lerp(min, max, offset))

// number.minus
print(num.minus(1))

// number.multiply
print(num.multiply(2))

// number.plus
print(num.plus(1))

// number.random_from
print(num.random_from(0))

