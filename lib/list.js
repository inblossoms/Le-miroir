const Table = require("easy-table");
const tplObj = require(`${__dirname}/template.json`);

let t = new Table(),
  tpl = Reflect.ownKeys(tplObj);

if (tpl.length > 0) {
  let data = [];
  Reflect.ownKeys(tplObj).map((k) => {
    data.push({ mark: k, repo: tplObj[k] });
  });

  // console.log([...Reflect.ownKeys(tplObj)]);
  data.forEach((tpl) => {
    // console.log(tpl);
    t.cell("Template Mark", tpl["mark"]);
    t.cell("Owner/Repo", tpl["repo"]);
    t.newRow();
  });

  console.log("\n", t.toString());
} else {
  console.log("\n  oops, you haven't tagged any warehouses yet!\n");
}
