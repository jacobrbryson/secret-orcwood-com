const config = require("../config");

exports.home = function(req, res){
	res.render('index', {
		title: "It's a secret!"
	});
}

exports.request = function(req,res){
	const keys = [];

	Object.entries(req.params).forEach((param) => keys.push(param[1]));

	if(!keys?.length){
		return returnHome(res);
	}

	//get last key
	let page = config.pages.find((page) => page.key == keys[keys.length - 1]);
	
	if(!page){
		return returnHome(res);
	}

	let secret = req.query.secret;
	page.answered = false;
	page.correct = false;

	if(secret){
		page.answered = true;
		if(secret.toLowerCase() == page.answer){

			page.correct = true;
			if(page.answerKey){
				let url = `/`;
				keys.forEach((key) => { url += (key + `/`)});
				url += page.answerKey;
				res.redirect(url);
				return;
			}else{
				res.render(page.view, {
					page: page
				});
			}
			
		}
	}

	res.render(page.view, {
		page: page
	});
}

function returnHome(res){
	res.redirect("/");
}

/*
	let key1 = config.questions.find((question) => question.key == req.params.key1);
	let key2 = config.questions.find((question) => question.key == req.params.key2);
	let key3 = config.questions.find((question) => question.key == req.params.key3);

	if(!key1){
		
	}
	
	if(key1){
		let secret = req.query.secret;
		
		if(secret){
			question.answered = true;
			if(secret.toLowerCase() == question.answer){
				question.correct = true;
				if(question.answerKey){
					res.redirect("/" + question.key + "/" + question.answerKey);
					return;
				}
			}
		}

		res.render('question', {
			question: question	
		});
		return;
	}*/