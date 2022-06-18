// Copyright (c) 2016, D-codE and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Client Side Scripting Four"] = {
	"filters": [
		{
			"fieldname": "name",
			"label": __("Client Side Scripting"),
			"fieldtype": "Link",
			"options": "Client Side Scripting"
		},
		{
			"fieldname": "dob",
			"label": __("DOB"),
			"fieldtype": "Date",
			// "default": frappe.datetime.now_date(),
		},
		{
			"fieldname": "age",
			"label": __("Age"),
			"fieldtype": "Data",
		}
	]
};
