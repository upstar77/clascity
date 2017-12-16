### Architecture ###
- Rails 5 application with webpacker
- Postgresql
- Turbolink
- Bootstrap
- Vanilla javascript for simple page
- For more complex page such as the search page -> react + redux (it is ok to have a store per page)
- Storybook to develop components (npm storybook)
- Linters Rubocop and Eslint - we might want to consider Reek - pre-commit-sample contains code to check syntax before commiting

### How to start the app ###
- install rails 5
- bundle install
- yarn install
- rake db:setup  // Seed data are in db/seeds.rb, john@gmail.com - helloworld are valid credential
- rails s

### How styles work
- Bootstrap 4 is used (flexbox support)
- Sass is used
- Styles are compiled thanks to `import '../styles/application.scss';` in `app/javascript/packs/main.js`
- Then they are imported thanks to the stylesheet tag in `application.html.erb`.
- Styling is not really organized so far, a naming convention has to be defined and enforced to keep them -
 organized (bem, smacss, ...)

### How javascript works

#### Third parties
Some basic javascript libraries were hard to port to webpacker, they are imported through the asset pipeline in `app/javascript/application.js`. This has been done as a work around. Whenever it is possible, all javascript code should be imported through webpacker in `app/javascript/packs/main.js`.

#### Main.js
Javascript main file is located in `app/javascript/packs/main.js`. It will compile all the assets thanks to webpacker.

The most important file is `app/javascript/src/dispatcher.js`:
- `application.html.erb` adds the attribute `data-page` to the body html element. `data-page` is the name of the controller and method used to render to the current page. For instance if the current page is rendered through the index method of the classe controller, body will be `<body data-page="classe:index">`.
- on every page load or page change triggered by turbolink (see onPageLoad in `page.js`), dispatcher.js will read `data-page` from the dom and load the javascript code that should be attached to the page.

This code can be vanilla javascript (ClasseLocation) or more complex javascript such as `ClasseSearchPage` which inject a react component fed by redux. It is up to the implementer to decide what is best suited for a particular page.

#### Jquery assert
Jquery is useful to add or modify javascript pages lightly. However, it may happen that jquery cannot find the element in the page. To make those errors obvious, I added a modified version of the `jquery.assert.js` library. Instead of using $ to find elements, please use `$ao('div')` to find one element and `$af('div', 3)` to find 3 elements. An assertion error will be thrown if jquery doesn't find what was expected

#### How react component works with templates
In `app/helpers/react_helper`, a react_container method will render a div tag.
`<%= react_container({class: 'js-react-classe-search'}) %>` will render `<div class="js-react-classe-search"></div>` in the html template. Then in the dispatcher, we say that when the body attribute data-page is `classes:index`, we must load `pages/classe_search`. `classe_search/index.jsx` will look for the selector $(.js-react-classe-search") and inject the javascript component in it.

We want to populate the component right away with data, therefore the react_container helper method can take an additional argument:
`<%= react_container({class: 'js-react-classe-search'}, {classes: @classes_json}) %>`. This will render
`<div class="js-react-classe-search" data-react-props={classes: ....}`. `data-react-props` will be loaded by the component (see the init function of classe_search/index.jsx).

### Rails

Please refer to the gemfile to see all libraries used.

#### Tests

So far, only a few end to end tests have been written and a complete test suit for `models/classe` for the search feature. Please use factories (spec/factories) to create sample data for the tests.

#### Searching through a classe

For now, Postgresql is more than we need for classe search. It supports full text search gracefully and location base search as well. (see the gem `activerecord-postgres-earthdistance`). `spec/models/classe_spec` gives an overview of every cases covered by the search endpoint. There is one thing **VERY IMPORTANT** left to fix implementing unaccent with tsvector:

```
  # FIXME: Search will be slow until this is restored, however we have to
  # implement unaccent support with tsvector
  # trigger.before(:insert, :update).nowrap do
  #   "tsvector_update_trigger('tsv_title_description', 'pg_catalog.english', title, description);"
  # end
```

We might have to write our own function here. Help can be found here: https://github.com/Casecommons/pg_search

#### Authentication

Authentication is handled by devise. The facebook auth is implemented, it should fairly easy to implement Google oauth by modifying slightly the code.

#### Class -> Classe

Rails doesn't like us using the reserved word `class`. Therefore I chose to use `classe` instead and create a pluralize rule accordingly (i could have gone with klass but I think it is better to reserve it as a synonym of class)

### Started but not finished
- When creating a classe, the popup asking to pick a location is messy. We might want to recreate entirely this select precise location popup. Why do we need it? Because we need precise coordinates to search for classe on a map (airbnb and craiglist are good examples of how to do it). If we want to keep the current implementation, the edition is left to implement and there is probably a few bugs to fix.

- The classe search page contains only the backbone, no style, no advanced functionnality, but I have built strong foundations to build on top of it. React+Redux will give you all the flexibility needed to make that page easy to implement without having to refresh or go crazy with jquery. The search api endpoint works well already.

- The search endpoint is going to be slow until the unaccent thing is able to work with tsvector. (See above)

Do a global search of all TODO and FIXME in the code
