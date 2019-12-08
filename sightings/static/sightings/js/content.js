function createAuxRow(content, usid) {
	return "<tr class='aux-row'>" + 
		"<td colspan=9>" + content + "</td>" + 
		"</tr>";
}

function createRow(args) {
return '<tr>' + 
  '<td><i class="fa fa-edit" aria-hidden="true"></i></td>' + 
  '<td><i class="fa fa-plus" aria-hidden="true"></i></td>' + 
  '<td class="usid-td">' + args.unique_squirrel_id + '</td>' + 
  '<td class="coor-td">(<span>' + args.latitude + '</span>, <span>' + args.longitude + '</span>)</td>' + 
  '<td class="shift-td">' + args.shift + '</td>' + 
  '<td class="date-td">' + args.date + '</td>' + 
  '<td class="age-td">' + args.age + '</td>' + 
  '<td class="pfc-td">' + args.primary_fur_color + '</td>' + 
  '<td class="loc-td">' + args.location + '</td>' + 
  '<td class="sloc-td">' + args.specific_location + '</td>' + 
  '<td class="run-td">' + args.running + '</td>' + 
  '<td class="chase-td">' + args.chasing + '</td>' + 
  '<td class="climb-td">' + args.climbing + '</td>' + 
  '<td class="eat-td">' + args.eating + '</td>' + 
  '<td class="forage-td">' + args.foraging + '</td>' + 
  '<td class="other-td">' + args.other_activities + '</td>' + 
  '<td class="kuks-td">' + args.kuks + '</td>' + 
  '<td class="quaas-td">' + args.quaas + '</td>' + 
  '<td class="moans-td">' + args.moans + '</td>' + 
  '<td class="tail-flag-td">' + args.tail_flags + '</td>' + 
  '<td class="tail-twitch-td">' + args.tail_twitches + '</td>' + 
  '<td class="appr-td">' + args.approaches + '</td>' + 
  '<td class="indif-td">' + args.indifferent + '</td>' + 
  '<td class="run-from-td">' + args.runs_from + '</td>' + 
'</tr>';
}

function createSuccessRow() {
	return "<tr class='add-success-row aux-row aux-success-row'><td colspan=9 align='center'>" + 
            "<div class='alert alert-success' role='alert'>" + 
                "<span>New record is added!</span>" +
            "</div></td><td colspan=15></td></tr>";
}

function createForm(form, update) {
return '<form>' + 
'  <div class="form-group row">' + 
'      <div class="col-sm-6">' + 
'          <label for="usid-input">USID</label>' + 
'          <input type="text" class="form-control" id="usid-input" placeholder="required">' + 
'      </div>' + 
'      <div class="col-sm-3">' + 
'          <label for="lat-input">Latitude</label>' + 
'          <input type="text" class="form-control" id="lat-input" placeholder="required">' + 
'      </div>' + 
'      <div class="col-sm-3">' + 
'          <label for="lon-input">Longtitude</label>' + 
'          <input type="text" class="form-control" id="lon-input" placeholder="required">' + 
'      </div>' + 
'  </div>' + 
'  <div class="form-group row">' + 
'      <div class="col-sm-3">' + 
'        <label for="shift-select">Shift</label>' + 
'        <select class="form-control" id="shift-select">' + 
'          <option>AM</option>' + 
'          <option>PM</option>' + 
'        </select>' + 
'      </div>' + 
'      <div class="col-sm-3">' + 
'        <label for="date-input" class="col-2 col-form-label">Date</label>' + 
'        <input class="form-control" type="date" value="2009-01-12" id="date-input">' + 
'      </div>' + 
'      <div class="col-sm-3">' + 
'          <label for="age-select">Age</label>' + 
'          <select class="form-control" id="age-select">' + 
'              <option>Juvenile</option>' + 
'              <option>Adult</option>' + 
'              <option>Other</option>' + 
'          </select>' + 
'      </div>' + 
'      <div class="col-sm-3">' + 
'          <label for="pfc-select">Primary Fur Color</label>' + 
'          <select class="form-control" id="pfc-select">' + 
'              <option>Cinnamon</option>' + 
'              <option>Black</option>' + 
'              <option>Other</option>' + 
'          </select>' + 
'      </div>' + 
'  </div>' + 
'  <div class="form-group row">' + 
'      <div class="col-sm-3">' + 
'          <label for="loc-select">Location</label>' + 
'          <select class="form-control" id="loc-select">' + 
'              <option>Ground Plane</option>' + 
'              <option>Above Ground</option>' + 
'              <option>Other</option>' + 
'          </select>' + 
'      </div>' + 
'      <div class="col-sm-9">' + 
'          <label for="sloc-input">Specific Location</label>' + 
'          <input type="text" class="form-control" id="sloc-input" placeholder="optional">' + 
'      </div>' + 
'  </div>' + 
'  <div class="form-group row">' + 
'      <div class="col-sm-1">' + 
'          <div class="form-check">' + 
'              <input type="checkbox" class="form-check-input" id="run-check">' + 
'              <label class="form-check-label" for="run-check">Running</label>' + 
'          </div>' + 
'      </div>' + 
'      <div class="col-sm-1">' + 
'          <div class="form-check">' + 
'              <input type="checkbox" class="form-check-input" id="chase-check">' + 
'              <label class="form-check-label" for="chase-check">Chasing</label>' + 
'          </div>' + 
'      </div>' + 
'      <div class="col-sm-1">' + 
'          <div class="form-check">' + 
'              <input type="checkbox" class="form-check-input" id="climb-check">' + 
'              <label class="form-check-label" for="climb-check">Climbing</label>' + 
'          </div>' + 
'      </div>' + 
'      <div class="col-sm-1">' + 
'          <div class="form-check">' + 
'              <input type="checkbox" class="form-check-input" id="eat-check">' + 
'              <label class="form-check-label" for="eat-check">Eating</label>' + 
'          </div>' + 
'      </div>' + 
'      <div class="col-sm-1">' + 
'          <div class="form-check">' + 
'              <input type="checkbox" class="form-check-input" id="forage-check">' + 
'              <label class="form-check-label" for="forage-check">Foraging</label>' + 
'          </div>' + 
'      </div>' + 
'      <div class="col-sm-1">' + 
'          <div class="form-check">' + 
'              <input type="checkbox" class="form-check-input" id="other-check" checked disabled>' + 
'              <label class="form-check-label" for="other-check">Other</label>' + 
'          </div>' + 
'      </div>' + 
'      <div class="col-sm-6">' + 
'          <input type="text" class="form-control" id="other-input" placeholder="required">' + 
'      </div>' + 
'  </div>' + 
'  <div class="form-group row">' + 
'      <div class="col-sm-1">' + 
'          <div class="form-check">' + 
'              <input type="checkbox" class="form-check-input" id="kuks-check">' + 
'              <label class="form-check-label" for="kuks-check">Kuks</label>' + 
'          </div>' + 
'      </div>' + 
'      <div class="col-sm-1">' + 
'          <div class="form-check">' + 
'              <input type="checkbox" class="form-check-input" id="quaas-check">' + 
'              <label class="form-check-label" for="quaas-check">Quaas</label>' + 
'          </div>' + 
'      </div>' + 
'      <div class="col-sm-1">' + 
'          <div class="form-check">' + 
'              <input type="checkbox" class="form-check-input" id="moans-check">' + 
'              <label class="form-check-label" for="moans-check">Moans</label>' + 
'          </div>' + 
'      </div>' + 
'      <div class="col-sm-1">' + 
'          <div class="form-check">' + 
'              <input type="checkbox" class="form-check-input" id="flag-check">' + 
'              <label class="form-check-label" for="flag-check">Tail flags</label>' + 
'          </div>' + 
'      </div>' + 
'      <div class="col-sm-1">' + 
'          <div class="form-check">' + 
'              <input type="checkbox" class="form-check-input" id="twitch-check">' + 
'              <label class="form-check-label" for="twitch-check">Tail twitches</label>' + 
'          </div>' + 
'      </div>' + 
'      <div class="col-sm-1">' + 
'          <div class="form-check">' + 
'              <input type="checkbox" class="form-check-input" id="approach-check">' + 
'              <label class="form-check-label" for="approach-check">Approaches</label>' + 
'          </div>' + 
'      </div>' + 
'      <div class="col-sm-1">' + 
'          <div class="form-check">' + 
'              <input type="checkbox" class="form-check-input" id="indiff-check">' + 
'              <label class="form-check-label" for="indiff-check">Indifferent</label>' + 
'          </div>' + 
'      </div>' + 
'      <div class="col-sm-1">' + 
'          <div class="form-check">' + 
'              <input type="checkbox" class="form-check-input" id="run-from-check">' + 
'              <label class="form-check-label" for="run-from-check">Runs from</label>' + 
'          </div>' + 
'      </div>' + 
'  </div>' + 
'  <button type="button" class="btn btn-primary px-4 float-right ' + (update ? 'update-btn' : 'add-btn') + '">Save</button>' + 
'  <button type="button" class="btn btn-secondary px-4 float-right cancel-btn">Cancel</button>' + 
'</form>';
}
