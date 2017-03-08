const faker       = require('faker');
const url         = require('url');
const querystring = require('querystring');

function RootController(request, response) {
    const parsedUrl = url.parse(request.url);
    let result      = undefined;

    if (parsedUrl.query != null) {
        const parameters = querystring.parse(parsedUrl.query);

        result = faker.fake(parameters.template);
    } else {
        const randomName    = faker.name.findName();
        const randomCountry = faker.address.country();

        result = "Hello my name is " + randomName + ". I'm live in " + randomCountry;
    }

    response.write(result);
    response.end();
}

module.exports = RootController;
