import app = require("teem");

class IndexRoute {
	public async index(req: app.Request, res: app.Response) {
		res.render("index/index");
	}

	public async products(req: app.Request, res: app.Response) {
		res.render("index/products");
	}

	public async contact(req: app.Request, res: app.Response) {
		res.render("index/contact");
	}

	public async about(req: app.Request, res: app.Response) {
		res.render("index/about");
	}
}

export = IndexRoute;
