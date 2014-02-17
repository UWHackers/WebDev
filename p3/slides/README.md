# Slides from talk on node.js.

### Karan Goel, 02.20.2014

All of this week's session was done using open source software.

Slides built using [reveal.js.](http://lab.hakim.se/reveal-js)

### Full setup

Some reveal.js features, like external markdown and speaker notes, require that presentations run from a local web server. The following instructions will set up such a server as well as all of the development tasks needed to make edits to the reveal.js source code.

1. Install [Node.js](http://nodejs.org/)

2. Install [Grunt](http://gruntjs.com/getting-started#installing-the-cli)

4. Clone the reveal.js repository
```sh
$ git clone https://github.com/hakimel/reveal.js.git
```

5. Navigate to the reveal.js folder
```sh
$ cd reveal.js
```

6. Install dependencies
```sh
$ npm install
```

7. Serve the presentation and monitor source files for changes
```sh
$ grunt serve
```

8. Open <http://localhost:8000> to view your presentation

You can change the port by using `grunt serve --port 8001`.