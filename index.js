const gql = require("graphql-tag");
const axios = require("axios");
const { print } = require('graphql/language/printer');

const API_GATEWAY_URL = "http://localhost:4000/graphql";

const QueryGetAllToken = gql`
    query {
        getAllToken {
            code
            message
            totalData
            totalPage
            page
            perPage
            data {
                _id
                address
                chainId
                symbol
                decimal
                name
                flag
                sparkLine
            }
        }
    }
`;

const main = async () => {
    try {
        const response = await axios({
            url: API_GATEWAY_URL,
            method: "post",
            data: {
                query: print(QueryGetAllToken)
            }
        });

        const listToken = response.data.data.getAllToken;
        console.log("listToken", listToken);
    } catch (err) {
        console.log("err", err.message);
    }
};

main();