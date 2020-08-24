# Gatsby WordPress (ACF, GraphQL)

Minimal implementation of GatsbyJS site sourcing data from WordPress with [Gatsby Source Wordpress Experimental](https://github.com/gatsbyjs/gatsby-source-wordpress-experimental).    

The previous official [gatsby-source-wordpress](https://www.gatsbyjs.com/plugins/gatsby-source-wordpress/) will soon be deprecated, to be replaced with the new plugin which moves away from the WP Rest API and has "adopted the use of WPGraphQL to support Preview and incremental builds as well as to make the schema generally more stable and consistent". 

Uses [Docker](https://www.docker.com/get-started) to run WordPress, MySQL and phpMyAdmin. 🐳


## Setup

```
git clone git@github.com:notepadwebdev/gatsby-wordpress.git
```


### Install and set up WordPress

Install [Docker](https://www.docker.com/get-started) (if you don't already have it), and start the Docker app.

From the `wordpress` directory, do the following...

1. Start the Docker container
```bash
docker-compose up -d
```
2. When complete (can take a few of minutes - especially first time) go to [http://localhost:8888/](http://localhost:8888/) and complete the usual WordPress install.
3. Once installed, log into WordPress and [enable the included plugins](http://localhost:8888/wp-admin/plugins.php) in the following order...
   * [WP GraphQL](https://github.com/wp-graphql/wp-graphql)
   * [WP Gatsby](https://github.com/gatsbyjs/wp-gatsby) (depends upon WP GraphQL)
   * [ACF Pro](https://www.advancedcustomfields.com/pro/)
   * [WPGraphQL for Advanced Custom Fields](https://www.wpgraphql.com/acf/) (depends upon ACF and WP GraphQL)
4. [Switch theme](http://localhost:8888/wp-admin/themes.php) to the provided `Gatsby WP` (CMS only) theme.
5. Make sure that WP permalinks are setup correctly. [*Settings => Permalinks =>*](http://localhost:8888/wp-admin/options-permalink.php) choose **Post name** and save.
6. (Optional) [Create a new](http://localhost:8888/wp-admin/nav-menus.php) `Primary Navigation` menu, and add default WordPress pages to it. **Make sure you tick the checkbox to add it to the `Primary Navigation` display location.**
7. (Optional) Enable Gatsby preview from the [GatsbyJS settings page](http://localhost:8888/wp-admin/options-general.php?page=gatsbyjs).


### Install and set up Gatsby

Install Gatsby CLI globally (if you don't already have it).

```
npm install -g gatsby-cli
```

From the `gatsby` directory, switch to an appropriate node version then install project dependencies.

```
nvm use
npm install
```

### Environment Variables (optional)

Environment Variables can be used to manage details across environments.   
Create a new `.env.development` file based on the provided `.env.example` example. Use this to set your own GraphQL endpoint if you decide to source from a different WordPress instance. Replace the following with your own endpoint URL...

```
WPGRAPHQL_URL=http://localhost:8888/graphql
```

## Development

### Wordpress

From the `wordpress` directory, run the following command to start the Docker container

```bash
docker-compose up -d
```

Check that your `/graphql` endpoint is accessible. You should see the following errors response when you [view the endpoint](http://localhost:8888/graphql) in your browser. If not, then something went wrong.   

```json
{"errors":[{"message":"GraphQL Request must include at least one of those two parameters: \"query\" or \"queryId\"","extensions":{"category":"request"}}]}
```

#### Gatsby WP theme

- CMS only, no front end.
- ACF Local JSON enabled with simple implementation of Flexible Content area added for all WP pages.
- A "Primary Navigation" menu container example included (with associated Gatsby component).
- Classic Editor instead of Gutenberg.
- A reduced Admin UI.
- Docker volume for `./wp-content` for your plugins, themes, and uploads.

### Gatsby 
From the `gatsby` directory, run the following command to build the site and start the Gatsby web server. Hot reloading is enabled.

```
npm start
``` 

View the GatsbyJS site at [http://localhost:8000/](http://localhost:8000/).   


Index page includes a list of links to all WP pages and posts. Create new pages and posts to see them appear on the Gatsby site homepage (when Gatsby preview is [enabled](http://localhost:8888/wp-admin/options-general.php?page=gatsbyjs)).

### Local Development URLs

Gatsby: http://localhost:8000/

GraphiQL: http://localhost:8000/___graphql

WordPress (CMS only): http://localhost:8888/wp-admin/

phpMyAdmin: http://localhost:3333/ **user: wordpress pass: wordpress**
