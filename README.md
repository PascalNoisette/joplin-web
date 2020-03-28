# Joplin Web

A Web application companion for [JoplinApp](https://joplinapp.org)

![Joplin web](https://raw.githubusercontent.com/foxmask/joplin-web/master/joplin_web.png)

## why that project ?

Because it may happened we need to access to [JoplinApp](https://joplinapp.org) without having access to our smartphone or the Joplin Desktop, and a Web Application could to the trick at a given moment.

## Requirements

* [VueJS](https://vuejs.org)



### settings

copy env.sample to .env

then set at least this parm:

* the `JOPLIN_WEBCLIPPER_TOKEN` you have in the Webclipper config page in Joplin
* the `JOPLIN_RESOURCES` to find the files of joplin and being able to load them in the editori

the config file is commented to be able to help you to fill the parameters, like `HTTP_PORT`, `PAGINATOR` or `DEBUG`


### Running

to be able to manage the joplin notes from the web app, we need to start:

* if you are on your workstation just start "Joplin Desktop"
* if you are using joplin on a dedicated server, you can start "joplin headless", as follow
```
joplin --profile ~/.config/joplin-desktop/ server start
Server is already running on port 41184
```
joplin headless is available with the "joplin terminal" version (since build 147), you can install like that
```
NPM_CONFIG_PREFIX=~/.joplin-bin npm install -g joplin
sudo ln -s ~/.joplin-bin/bin/joplin /usr/bin/joplin
```
(have a look at https://joplinapp.org/ for more details)

#### for developement purpose


* start the frontend

see [`joplin-web/joplin-vue/README.md`](joplin-vue/README.md) file


#### for production purpose

* compile the vuejs project first,


## Installation

```
npm install -g http-server
npm install
npm run build

```

