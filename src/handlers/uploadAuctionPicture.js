async function uploadAuctionPicture(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({}),
  };
}

export const handler = uploadAuctionPicture;
