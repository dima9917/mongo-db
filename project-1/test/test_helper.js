const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

//runs before entires test suite
before(done => {
  mongoose.connect("mongodb://localhost:27017/users_test", { useNewUrlParser: true });
  mongoose.connection
    .once("open", () => console.log("Connected to database!"))
    .on("error", error => {
      console.warn("Warning", error);
    });
  done();
});

beforeEach(done => {
  mongoose.connection.collections.users.drop(() => {
    //ready to run next test
    done();
  });
});
