// Copyright (c) 2021, D-codE and contributors
// For license information, please see license.txt

frappe.ui.form.on('Client Side Scripting', {

// 26
/////////////////////////////////////////////////////////////////
//////////////				Button 				/////////////////
/////////////////////////////////////////////////////////////////
 
	refresh:function(frm){

		// frm.add_custom_button('Click Me Button',() =>{
		
		// 	frappe.msgprint(__('You Clicked Me!!'));
		// })
		
		frm.add_custom_button('Click Me1',() =>{
		
			frappe.msgprint(__('You Clicked 1 !!'));
		},'click me')

		frm.add_custom_button('Click Me2',() =>{
		
			frappe.msgprint(__('You Clicked 2 !!'));
		},'click me')
	}


});

























// 20 
/////////////////////////////////////////////////////////////////
//////////////				Events 				/////////////////
/////////////////////////////////////////////////////////////////

	// refresh: function(frm) {
	// 	frappe.msgprint("Hello D-codE from 'refresh' event")
	// }
	
	// onload: function(frm) {
	// 	frappe.msgprint("Hello D-codE from 'onload' event")
	// }
	
	// validate: function(frm) {
	// 	frappe.throw("Hello D-codE from 'validate' event")
	// }
	
	// before_save: function(frm) {
	// 	frappe.throw("Hello D-codE from 'before_save' event")
	// }
	
	// after_save: function(frm) {
	// 	frappe.throw("Hello D-codE from 'after_save' event")
	// }
	
	// enable: function(frm) {
	// 	frappe.msgprint("Hello D-codE from  'enable' fieldname event")
	// },
	
	// age: function(frm) {
	// 	frappe.msgprint("Hello D-codE from 'age' fieldname event")
	// }
	
	// family_members_on_form_rendered: function(frm) {
	// 	frappe.msgprint("Hello D-codE from 'family_members' child table rendered event")
	// }

	// before_submit: function(frm) {
	// 	frappe.throw("Hello D-codE from 'before_submit' event")
	// }
	
	// on_submit: function(frm) {
	// 	frappe.msgprint("Hello D-codE from 'on_submit' event")
	// }

	// before_cancel: function(frm) {
	// 	frappe.throw("Hello D-codE from 'before_cancel' event")
	// }

	// after_cancel: function(frm) {
	// 	frappe.msgprint("Hello D-codE from 'after_cancel' event")
	// }



// 21 
/////////////////////////////////////////////////////////////////
//////////////		Child Table Scripts			/////////////////
/////////////////////////////////////////////////////////////////

// frappe.ui.form.on('Family Members', {
//     // cdt is Child DocType name i.e Family Members
//     // cdn is the row name

// 	// name1: function(frm) {
// 	// 	frappe.msgprint("Hello D-codE from Child DocType 'name1' event")
// 	// }

// 	// age(frm, cdt, cdn) {
// 	// 	frappe.msgprint("Hello D-codE from 'age' Child DocType fieldname event")
//     // }
// })



// 22
/////////////////////////////////////////////////////////////////
//////////////			value fetching 			/////////////////
/////////////////////////////////////////////////////////////////
	
	// frm.doc.first_name

	// after_save:function(frm){
	// 	frappe.msgprint(__("The full name is '{0}'",
	// 			[frm.doc.first_name +" "+ frm.doc.middle_name+" "+frm.doc.laste_name]))
	
	// 	// for (let row of frm.doc.family_members) {
	// 	// 	frappe.msgprint(__("{0}. The family member name is '{1}' and relation is '{2}'",
	// 	// 		[row.idx,row.name1,row.relation]))
	// 	// }			
	// }




// 23
/////////////////////////////////////////////////////////////////
//////////////	 frm.set_intro & frm.is_new()	/////////////////
/////////////////////////////////////////////////////////////////
	// refresh:function(frm){
		
	// 	// frm.set_intro('Now you can ctreate a new Client Side Scripting doctype')

	// 	if(frm.is_new()){
	// 		frm.set_intro('Now you can ctreate a new Client Side Scripting doctype')
	// 	}
	// }



// 24
/////////////////////////////////////////////////////////////////
//////////////			frm.set_value			/////////////////
/////////////////////////////////////////////////////////////////

	// validate:function(frm){
	// 	frm.set_value('full_name',frm.doc.first_name +" "+ frm.doc.middle_name+" "+frm.doc.laste_name)
	
	
	// 	// let row = frm.add_child('family_members',{
	// 	// 	name1:'Johnson jose',
	// 	// 	relation: 'Father',
	// 	// 	age:56,
	// 	// })
	// }


// 25
/////////////////////////////////////////////////////////////////
//////////////			set_df_property	 		/////////////////
/////////////////////////////////////////////////////////////////
	
	// enable:function(frm){

			// frm.set_df_property('first_name','reqd',1)
			// frm.refresh_field('first_name');

			// frm.set_df_property('middle_name','read_only',1)
			// frm.refresh_field('middle_name');
			
			// frm.toggle_reqd('age',true)

	// }


// 25
/////////////////////////////////////////////////////////////////
//////////////				Button 				/////////////////
/////////////////////////////////////////////////////////////////
 
	// refresh:function(frm){

	// 	frm.add_custom_button('Click Me Button',() =>{
		
	// 		frappe.msgprint(__('You Clicked Me!!'));
	// 	})
		
	// 	// frm.add_custom_button('Click Me1',() =>{
		
	// 	// 	frappe.msgprint(__('You Clicked 1 !!'));
	// 	// },'click me')

	// 	// frm.add_custom_button('Click Me2',() =>{
		
	// 	// 	frappe.msgprint(__('You Clicked 2 !!'));
	// 	// },'click me')
	// }


// 25.1
/////////////////////////////////////////////////////////////////
//////////////			Dialog API.1 			/////////////////
/////////////////////////////////////////////////////////////////

// refresh:function(frm){
// 	if(frm.is_new()){
// 		let d = new frappe.ui.Dialog({
// 			title: 'Enter the Parent Details',
// 			fields:[{
// 					label:'First Name',
// 					fieldname:'first_name',
// 					fieldtype:'Data'
// 				},
// 				{
// 					label:'Middle Name',
// 					fieldname:'middle_name',
// 					fieldtype:'Data'
// 				},
// 				{
// 					label:'Last Name',
// 					fieldname:'last_name',
// 					fieldtype:'Data'
// 				}],
// 				primary_action_label:'submit',
// 				primary_action(values){
// 					frm.set_value('first_name',values.first_name)
// 					frm.set_value('middle_name',values.middle_name)
// 					frm.set_value('laste_name',values.last_name)
// 				d.hide()
// 			}
// 		});
// 		d.show();
// 	}
// }

// 23
/////////////////////////////////////////////////////////////////
//////////////			Dialog API.2 			/////////////////
/////////////////////////////////////////////////////////////////

	// after_save:function(frm){
		
	// 	frappe.msgprint({
	// 		title:__("Notifaction"),
	// 		indicator: 'red',
	// 		message: __('Hello D-codE')
	// 	});
	// }


// 25.1
/////////////////////////////////////////////////////////////////
//////////////			Dialog API.1 			/////////////////
/////////////////////////////////////////////////////////////////	
	// refresh: function(frm) {
	// 	frappe.prompt([
	// 		{
	// 			label: 'First Name',
	// 			fieldname: 'first_name',
	// 			fieldtype: 'Data'
	// 		},
	// 		{
	// 			label:'Middle Name',
	// 			fieldname:'middle_name',
	// 			fieldtype:'Data'
	// 		},
	// 		{
	// 			label: 'Last Name',
	// 			fieldname: 'last_name',
	// 			fieldtype: 'Data'
	// 		},
	// 	], (values) => {
	// 		frm.set_value({
	// 			'first_name':values.first_name,
	// 			'middle_name':values.middle_name,
	// 			'laste_name':values.last_name
	// 		})
	// 	})
	// }

// 25.1
/////////////////////////////////////////////////////////////////
//////////////			Dialog API.1 			/////////////////
/////////////////////////////////////////////////////////////////
	// refresh: function(frm) {
	// 	frappe.confirm('Are you sure you want to proceed?',
	// 	() => {
	// 		// action to perform if Yes is selected
	// 			frappe.msgprint("You selected Yes")
	// 	}, () => {
	// 		// action to perform if No is selected
	// 			frappe.msgprint("You selected No")
	// 	})	}


// 25.1
/////////////////////////////////////////////////////////////////
//////////////			Dialog API.1 			/////////////////
/////////////////////////////////////////////////////////////////
	// refresh: function(frm) {
	// 	frappe.warn('Are you sure you want to proceed?',
	// 	'There are unsaved changes on this page',
	// 	() => {
	// 		// action to perform if Continue is selected
	// 			frappe.msgprint("You selected Continue")

	// 	},
	// 	'Continue',
	// 	true // Sets dialog as minimizable
	// )}
	
// 25.1
/////////////////////////////////////////////////////////////////
//////////////			Dialog API.1 			/////////////////
/////////////////////////////////////////////////////////////////
	// refresh: function(frm) {
	// 	frappe.show_alert({
	// 		message:__('Hi D-codE, you have a new message'),
	// 		indicator:'green'
	// 	}, 5);	
	// }

// 23
/////////////////////////////////////////////////////////////////
//////////////			Dialog API.2 			/////////////////
/////////////////////////////////////////////////////////////////
	// refresh: function(frm) {
	// 	frappe.show_progress('Loading..', 70, 100, 'Please wait');
	// }







	





// /////////////////////////////////////////////////////////////////

	// enable:function(frm){
	// 	if(frm.is_dirty()){
	// 		frappe.msgprint(__('please save the document'))
	// 	}
	// }

// /////////////////////////////////////////////////////////////////

	// refresh:function(frm){
	// 	frm.add_custom_button('Click Me1',() =>{
		
	// 		frappe.msgprint(__('You Clicked 1!!'));
	// 	},'click me')

	// 	frm.add_custom_button('Click Me2',() =>{
		
	// 		frappe.msgprint(__('You Clicked2!!'));
	// 	},'click me')
	// }

// ///////////////////////////////////////////////////

	// enable:function(frm){

	// 	if(!frm.is_new()){
	// 		frm.set_df_property('last_name','reqd',1)
	// 		frm.set_df_property('full_name','read_only',1)
	// 		frm.doc.refresh()

	// 		// frm.toggle_reqd('age',true)

	// 	}
	// }

// ///////////////////////////////////////////////////////////
	
	// refresh:function(frm){

	// 	if(!frm.is_new()){
	// 		frm.trigger('test_fun');
	// 	}


	// },

	// // enable:function(frm){
		
	// // 	frappe.msgprint(__('the event is triggered'))
	// // }

	// test_fun(frm){

	// 	frappe.msgprint(__('This message is from test_fun'))
	
	// }

// ///////////////////////////////////////////////////////

	// enable:function(frm){

	// 	let row = frm.add_child('date_and_values_section',{
	// 		date: frappe.datetime.get_today(),
	// 		value_1: 10,
	// 		value_2:20,
	// 	})
	// 	frm.refresh_field('date_and_values_section')

	// }

// ////////////////////////////////////////////////////////
