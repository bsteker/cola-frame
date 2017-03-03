function includeAll(root) {
	function writeScriptlet(file) {
		document.write("<script language=\"JavaScript\" type=\"text/javascript\" charset=\"utf-8\" src=\"" + root + file + "\"></script>");
	}

	function writeStyleSheet(file) {
		document.write("<link rel=\"stylesheet\" type=\"text/css\" charset=\"utf-8\" href=\"" + root + file + "\" />");
	}

	writeStyleSheet("semantic.min.css");
	writeStyleSheet("cola.min.css");
	document.write("<link rel=\"stylesheet\" type=\"text/css\" charset=\"utf-8\" href=\"//code.jquery.com/jquery-2.2.3.js\" />");

	writeScriptlet("3rd.min.js");
	writeScriptlet("semantic.min.js");
	writeScriptlet("cola.min.js");
}

includeAll(location.protocol + "//" + location.host + "/cola-frame/release/0.9.8/");