//https://github.com/ptpaterson/faunadb-graphql-schema-loader
const { importSchema, makeSchema } = require("faunadb-graphql-schema-loader");

const schema = makeSchema([
  require("./UserSchema"),
  require("./ChannelScema"),
  require("./OrganizationScema"),
]);

importSchema(process.env.FAUNADB_SECRET, schema).then((res) =>
  console.log(res)
);
