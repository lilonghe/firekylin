const Base = require('./base');


module.exports = class extends Base {
    constructor(...args) {
        super(...args);
        this.modelName = 'post_log';
    }

    addPostLog(postData) {
        let create_time = think.datetime();
        let data = {
            after: JSON.stringify(postData),
            create_time,
            pathname: postData.pathname
        }
        return this.add(data);
    }

}