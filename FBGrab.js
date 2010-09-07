/*!
 * FBGrab
 * FB Graph API JavaScript Wrapper
 *
 * Copyright 2010, Steven Ramkumar
 * Licensed under the MIT License
 * http://www.opensource.org/licenses/mit-license.php
 * Date: September 7th 2010 1:27AM PST
 *
 */
var FBGrab = (function(window, document, undefined){

     //Static FB Gaph API Method names
     var USER_INFO          = '/me',
         USER_FRIENDS       = '/me/friends',
         USER_NEWS_FEED     = '/me/home',
         USER_WALL_FEED     = '/me/feed',
         USER_LIKES         = '/me/likes',
         USER_MOVIES        = '/me/movies',
         USER_BOOKS         = '/me/books',
         USER_NOTES         = '/me/notes',
         USER_PHOTOS        = '/me/photos',
         USER_ALBUMS        = '/me/albums',
         USER_VIDEOS        = '/me/videos',
         USER_EVENTS        = '/me/events',
         USER_GROUPS        = '/me/groups',
         USER_CHECKINS      = 'me/checkins';

     //When no callback is provided execute the empty function
     var doNothing = function(){};
        
     return {
            userInfo: function(callback){
                this.execute(USER_INFO, callback);
            },
            userFriends: function(callback){
                this.execute(USER_FRIENDS, callback);
            },
            userNewsFeed: function(callback){
                this.execute(USER_NEWS_FEED, callback);
            },
            userWallFeed: function(callback){
                this.execute(USER_WALL_FEED, callback);
            },
            userLikes: function(callback){
                this.execute(USER_LIKES, callback);
            },
            userMovies: function(callback){
                this.execute(USER_MOVIES, callback);
            },
            userBooks: function(callback){
                this.execute(USER_BOOKS, callback);
            },
            userNotes: function(callback){
                this.execute(USER_NOTES, callback);
            },
            userPhotos: function(callback){
                this.execute(USER_PHOTOS, callback);
            },
            userAlbums: function(callback){
                this.execute(USER_ALBUMS, callback);
            },
            userVideos: function(callback){
                this.execute(USER_VIDEOS, callback);
            },
            userEvents: function(callback){
                this.execute(USER_EVENTS, callback);
            },
            userGroups: function(callback){
                this.execute(USER_GROUPS, callback);
            },
            userCheckins: function(callback){
                this.execute(USER_CHECKINS, callback);
            },
            
            execute: function(method, callback){
                FB.api(method, (typeof callback == "function" ? callback : doNothing));
            }
        }

}(this, window));


if(!window.FBG){window.FBG=FBGrab;}