<h3>FBGrab</h3>
FBGrab is a simple JavaScript wrapper around Facebook's Graph API. Once your website has an authenticated Facebook user logged in, FBGrab can be used to query data about that user.

<h3>Usage</h3>
Follow instructions to include the Facebook JS SDK on your site here: http://developers.facebook.com/docs/reference/javascript/ <br/> include FBGrab.js

Once you have an authenticated user logged into your site you can start querying user data from Facebook's Graph API.

FBGrab.userInfo(callback) //get the user object<br/>
FBGrab.userAlbums(callback) //get the user's photo albums

The callback is a function object that takes 1 argument, the data response of the query. The formats for the JSON objects you receive can be found at http://developers.facebook.com/docs/reference/api/

Just have a look inside FBGrab.js to look at types of data you can grab from the Graph API.

<h3>Roadmap</h3>
1. Implement the ability to query connections between all types of objects.

<h3>Resources</h3>
http://developers.facebook.com/docs/reference/javascript/ <br/> http://developers.facebook.com/docs/reference/api/
