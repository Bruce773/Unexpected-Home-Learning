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
      //   content_type: contentId
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
              resourceLink,
              resourceCategory,
              resourceFormat
            } = fields;

            data.push({
              dataType: id,
              title,
              resourceLink,
              resourceCategory: resourceCategory.map(
                ({ fields: { title } }) => title
              ),
              resourceFormat
            });
          }
          if (id === "localContact") {
            console.log(fields);
          }
        }
      );
      console.log(data);
      fs.writeFile("./data.json", JSON.stringify(data), err => {
        if (err) throw err;
        console.log("The file has been saved!");
      });
    })
    .catch(console.error);
};

fetchData();
