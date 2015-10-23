module.exports = {
	random: function(scale){
		return get_random(scale);
	},
	foreach: function(array, action){
		_for_each(array, action, function(){});
	},
	foreach_with_complete: function(array, action, on_complete){
		_for_each(array, action, on_complete);
	}
};

function get_random(scale){
	var r = Math.random() * scale;
	var i = parseInt(r);
	return i;
}

function _for_each(array, action, on_complete){
	var cp = array.slice();
	if (cp.length > 0){	
		action(cp[0], function(){
			cp = cp.slice(1);
			_for_each(cp, action, on_complete);
		});
	} else {
		on_complete();
	}
}

