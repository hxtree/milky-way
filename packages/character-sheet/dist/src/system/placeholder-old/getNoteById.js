"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
async function getNoteById(noteId) {
    const params = {
        TableName: process.env.NOTES_TABLE,
        Key: { id: noteId }
    };
    try {
        const { Item } = await docClient.get(params).promise();
        return Item;
    }
    catch (err) {
        console.log('DynamoDB error: ', err);
    }
}
exports.default = getNoteById;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Tm90ZUJ5SWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc3lzdGVtL3BsYWNlaG9sZGVyLW9sZC9nZXROb3RlQnlJZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMvQixNQUFNLFNBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7QUFFcEQsS0FBSyxVQUFVLFdBQVcsQ0FBQyxNQUFjO0lBQ3JDLE1BQU0sTUFBTSxHQUFHO1FBQ1gsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVztRQUNsQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFO0tBQ3RCLENBQUE7SUFDRCxJQUFJO1FBQ0EsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUN0RCxPQUFPLElBQUksQ0FBQTtLQUNkO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFBO0tBQ3ZDO0FBQ0wsQ0FBQztBQUVELGtCQUFlLFdBQVcsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFXUyA9IHJlcXVpcmUoJ2F3cy1zZGsnKTtcbmNvbnN0IGRvY0NsaWVudCA9IG5ldyBBV1MuRHluYW1vREIuRG9jdW1lbnRDbGllbnQoKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Tm90ZUJ5SWQobm90ZUlkOiBTdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIFRhYmxlTmFtZTogcHJvY2Vzcy5lbnYuTk9URVNfVEFCTEUsXG4gICAgICAgIEtleTogeyBpZDogbm90ZUlkIH1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBJdGVtIH0gPSBhd2FpdCBkb2NDbGllbnQuZ2V0KHBhcmFtcykucHJvbWlzZSgpXG4gICAgICAgIHJldHVybiBJdGVtXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEeW5hbW9EQiBlcnJvcjogJywgZXJyKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0Tm90ZUJ5SWQiXX0=