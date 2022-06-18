frappe.ready(function() {

	// bind events here

	// frappe.web_form.after_load = () => {
	// 	frappe.msgprint('Please fill all values carefully');
	// };
	frappe.web_form.after_load = () => {
		// init script here
		frappe.web_form.on('enable', (field, value) => {

			frappe.msgprint('Hi User');

		});
		frappe.web_form.on('dob', (field, value) => {
			if (value) {
				dob = new Date(value);
				var today = new Date();
				var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
				frappe.web_form.set_value("age", [age])		}
		});
	
	}
	
	frappe.web_form.validate = () => {
		email_id = frappe.web_form.get_value("email");
		var pattern = /^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		if(!pattern.test(email_id) && email_id){
			frappe.msgprint('Enter a valid email address');
			return false;
		}

		mobileNum = frappe.web_form.get_value("mob_no");
		var validateMobNum= /^\d*(?:\.\d{1,2})?$/;
		if (!validateMobNum.test(mobileNum) && mobileNum) {
			frappe.msgprint('Enter a valid Mobile number');
			return false;
		}

		return true;
	}
})