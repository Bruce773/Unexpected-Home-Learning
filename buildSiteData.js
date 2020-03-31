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
      console.log(items);
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
              pricing
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
              pricing
            });
          }
          if (id === "localContact") {
            console.log(fields);
          }
        }
      );
      fs.writeFile("./src/data.json", JSON.stringify(data), err => {
        if (err) throw err;
        console.log("The file has been saved!");
      });
    })
    .catch(console.error);
};

fetchData();
