##Debugging with XDebug

The default docker image has xdebug enabled for debugging. To use this with PHPStorm several things need to be done

The X_DEBUG_HOST variable in the .env file needs to contain the IP address of the dev. machine you are working on.
PHPStorm needs to be configured to use the docker php version via the PHPStorm docker integration
PHPStorm needs to be configured to listen on port 9001 for xdebug
PHPStorm needs to be configured to use DBGp proxy for the host machine and port 9001
Mapping needs to be configured



https://github.com/cretueusebiu/laravel-vue-spa/
