$('#main-table').on('click', '.fa.fa-plus', function() {
	const row = $(this).parent().parent();
	const usid = row.find('.usid-td').html();
	//
	// clear all aux row
	$(".aux-row").remove();
	
	// 
	// extract args
	const form = {
		usid: "",
		coor: "",
		shift: "",
		date: "",

	}

	//
	// 
	row.after(createAuxRow(createForm(null, false)));
});


$('#main-table').on('click', '.fa.fa-edit', function() {
	const row = $(this).parent().parent().parent();
	const args = extractArgFromRow();
});

$('#main-table').on('click', '.add-btn', function() {
	const row = $(this).parent().parent().parent();
	const args = extractArgFromForm();
	try {
		resolveCSRF();
		$.ajax({
           		type: "POST",
            		url: "/sightings/add",
            		data: adaptArg(args),
            		contentType: "application/x-www-form-urlencoded; charset=utf-8",
            		dataType: "json",
            		success: function(res){
					console.log(res);
                		if (res.success) {
					row.after(createSuccessRow());
					row.after(createRow(args));
					row.remove();
                		}
            		}
		});
	} catch (error) {
		console.log(error);
	}
});


function resolveCSRF() {
	var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();
                function csrfSafeMethod(method) {
                        // these HTTP methods do not require CSRF protection
                        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
                }
                $.ajaxSetup({
                        beforeSend: function(xhr, settings) {
                                if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                                        xhr.setRequestHeader("X-CSRFToken", csrftoken);
                                }
                        }
                });
}

function adaptArg(args) {
	let res = {};
	Object.keys(args).forEach(function (key) {
		if (args[key] == true) {
			res[key] = 'on';
		} else if (args[key] == false) {
		} else {
			res[key] = args[key];
		}
	});
	console.log(res);
	return res;
}

function extractArgFromRow(row) {
	return {
		unique_squirrel_id : row.find('.usid-td').html(),
		latitude : row.find('.coord-td span').eq(0).html(),
		longitude : row.find('.coor-td span').eq(1).html(),
		shift : row.find('.shift-td').html(),
		date : row.find('.date-td').html(),
		age : row.find('.age-td').html(),
		primary_fur_color : row.find('.pfc-td').html(),
		location : row.find('.loc-td').html(),
		specific_location : row.find('.sloc-td').html(),
		running : row.find('.run-td').html() === 'True',
		chasing : row.find('.chase-td').html() === 'True',
		climbing : row.find('.climb-td').html() === 'True',
		eating : row.find('.eat-td').html() === 'True',
		foraging : row.find('.forage-td').html() === 'True',
		other_activities : row.find('.other-td').html(),
		kuks : row.find('.kuks-td').html() === 'True',
		quaas : row.find('.quaas-td').html() === 'True',
		moans : row.find('.moans-td').html() === 'True',
		tail_flags : row.find('.tail-flag-td').html() === 'True',
		tail_twitches : row.find('.tail-twitch-td').html() === 'True',
		approaches : row.find('.appr-td').html() === 'True',
		indifferent : row.find('.indif-td').html() === 'True',
		runs_from : row.find('run-from-td').html() === 'True'
	}
}

function extractArgFromForm() {
	return {
		'unique_squirrel_id' : $('#usid-input').val(),
		latitude : $('#lat-input').val(),
		longitude : $('#lon-input').val(),
		shift : $('#shift-select option:selected').text(),
		date : $('#date-input').val(),
		age : $('#age-select option:selected').text(),
		primary_fur_color : $('#pfc-select option:selected').text(),
		location : $('#loc-select option:selected').text(),
		specific_location : $('#sloc-input').val(),
		running : $('#run-check').is(':checked'),
		chasing : $('#chase-check').is(':checked'),
		climbing : $('#climb-check').is(':checked'),
		eating : $('#eat-check').is(':checked'),
		foraging : $('#forage-check').is(':checked'),
		other_activities : $('#other-input').val(),
		kuks : $('#kuks-check').is(':checked'),
		quaas : $('#quaas-check').is(':checked'),
		moans : $('#moans-check').is(':checked'),
		tail_flags : $('#flag-check').is(':checked'),
		tail_twitches : $('#twitch-check').is(':checked'),
		approaches : $('#approach-check').is(':checked'),
		indifferent : $('#indiff-check').is(':checked'),
		runs_from : $('#run-from-check').is(':checked')
	}
}

function formatArgs(args) {
	const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.',
	'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
	
}
