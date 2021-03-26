require('dotenv').config();
const { GET_ONE_LINK } = require('./utils/linkQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
  const { id } = JSON.parse(event.body);
  const variables = { id };

  try {
    const { getLink } = await sendQuery(GET_ONE_LINK, variables);
    return formattedResponse(200, getLink);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, { err: 'Something went wrong' });
  }
};

// exports.handler = async (event) => {
//   const { _id: id } = JSON.parse(event.body);
//   const variables = { id };

//   try {
//     const { getLink } = await sendQuery(GET_ONE_LINK, variables);
//     return formattedResponse(200, getLink);
//   } catch (err) {
//     console.error(err);
//     return formattedResponse(500, { err: 'Something went wrong' });
//   }
// };
