FBGrab is a simple JavaScript wrapper around Facebook's Graph API. Once your website has an authenticated Facebook user logged in, FBGrab can be used to query data about that user.

Follow instructions to include the Facebook JS SDK on your site here: http://developers.facebook.com/docs/reference/javascript/

<h2>Usage</h2>
Once you have an authenticated user logged into your site you can start querying user data from Facebook's Graph API.

FBGrab.userInfo(callback) //get the user object
FBGrab.userAlbums(callback) //get the user's photo albums

The callback takes 1 argument, the response of the query, which you can process the data accordingly.

Just have a look inside FBGrab.js to look at types of data you can grab from the Graph API.

Roadmap
1. Implement the ability to query connections between all types of objects.

Resources:
http://developers.facebook.com/docs/reference/javascript/
http://developers.facebook.com/docs/reference/api/
