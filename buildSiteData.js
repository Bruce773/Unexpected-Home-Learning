require("dotenv").config();
const fs = require("fs");
const contentful = require("contentful");

// Construct data.json from Contenful data

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_API_KEY
});

const fetchData = async () => {
  client
    .getEntries({
      order: "sys.createdAt"
    })
    .then(({ items }) => {
      let data = [];
      console.log(`Recieved ${items.length} items from Contentful! 🚀`);
      items.forEach(
        ({
          sys: {
            contentType: {
              sys: { id }
            }
          },
          fields
        }) => {
          if (id === "category") return;
          if (id === "resource") {
            const {
              title,
              subtitle,
              resourceLink,
              resourceCategory,
              resourceFormat,
              pricing,
              embedlyHtml
            } = fields;

            data.push({
              dataType: id,
              title,
              subtitle,
              resourceLink,
              resourceCategory: resourceCategory.map(
                ({ fields: { title } }) => title
              ),
              resourceFormat,
              pricing,
              embedlyHtml
            });
          }
          if (id === "localContact") {
            console.log(fields);
          }
        }
      );
      fs.writeFile("./src/data.json", JSON.stringify(data), err => {
        if (err) throw err;
        console.log("Build file has been created! 📁");
      });
      fs.writeFile("./build/data.json", JSON.stringify(data), err => {
        if (err) throw err;
        console.log("Build file has been created! 📁");
      });
    })
    .catch(console.error);
};

fetchData();
